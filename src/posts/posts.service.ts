import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Model, Types } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}
  async create(createPostInput: CreatePostInput) {
    const newPost = await this.postModel.create({ ...createPostInput });
    await this.neo4jService.write(
      `MATCH (u:User)
      WHERE u.id=$userId
      CREATE (p:Post)
      SET p+=$props
      CREATE (u)-[:AUTHOR_OF]->(p)
      return p
    `,
      { props: { id: newPost.id }, userId: newPost.authorId.toString() },
    );

    return newPost;
  }

  async findAll(limit: number, offset: number) {
    const getPosts = this.postModel.find(
      {},
      {},
      { limit, skip: offset, sort: { _id: -1 } },
    );
    const getCount = this.postModel.countDocuments();
    return Promise.all([await getPosts, await getCount]);
  }
  async findAllByUserId(authorId: string, limit: number, offset: number) {
    const getPosts = this.postModel.find(
      { authorId: new Types.ObjectId(authorId) },
      {},
      { limit, skip: offset, sort: { _id: -1 } },
    );
    const getCount = this.postModel.countDocuments({
      authorId,
    });
    return Promise.all([await getPosts, await getCount]);
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }
  async likePost(userId: string, postId: string) {
    const data = await this.neo4jService.write(
      `MATCH (u:User),(p:Post)
      WHERE u.id=$userId AND p.id=$postId
      MERGE r=(u)-[:LIKE]->(p)
      RETURN r
    `,
      { userId, postId },
    );
    const post = await this.postModel.findById(postId);

    if (data.summary.counters.containsUpdates()) {
      post.likeCount++;
      return await post.save();
    } else return post;
  }
  async unLikePost(userId: string, postId: string) {
    const data = await this.neo4jService.write(
      `MATCH (u:User)-[r:LIKE]->(p:Post)
      WHERE u.id=$userId AND p.id=$postId
      DELETE r
    `,
      { userId, postId },
    );
    const post = await this.postModel.findById(postId);

    if (data.summary.counters.containsUpdates()) {
      post.likeCount--;
      return await post.save();
    } else return post;
  }
  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async checkLikedPost(userId: string, postId: string) {
    const data = await this.neo4jService.write(
      `MATCH k=(u:User)-[r:LIKE]->(p:Post)
      WHERE u.id=$userId AND p.id=$postId
      RETURN k
    `,
      { userId, postId },
    );
    return data.records?.length > 0;
  }
}
