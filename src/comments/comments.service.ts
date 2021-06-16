import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment, CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}
  async create(createCommentInput: CreateCommentInput) {
    const newCommnents = await this.commentModel.create(createCommentInput);
    this.createCommentNode(
      newCommnents.id,
      createCommentInput.postBelongId.toString(),
      newCommnents?.commentBelongId?.toString(),
    );
    if (newCommnents.commentBelongId)
      await this.increaseCommentCount(newCommnents.commentBelongId.toString());
    return newCommnents;
  }

  async createCommentNode(
    id: string,
    postBelongId: string,
    commentBelongId?: string,
  ) {
    if (commentBelongId) {
      await this.neo4jService.write(
        `
    MATCH (prevC:Comment)
    WHERE prevC.id=$commentId
    CREATE (prevC)-[:HAS_COMMENT]->(c:Comment)
    SET c+=$comment
    RETURN c
    `,
        {
          commentId: commentBelongId,
          comment: { id },
        },
      );
    } else {
      await this.neo4jService.write(
        `
    MATCH (p:Post)
    WHERE p.id=$postId
    CREATE (p)-[:HAS_COMMENT]->(c:Comment)
    SET c+=$comment
    RETURN c
    `,
        {
          postId: postBelongId,
          comment: { id },
        },
      );
    }
  }

  findAll() {
    return `This action returns all comments`;
  }
  async findAllByPostId(postId: string, limit: number, offset: number) {
    const getComments = this.commentModel.find(
      { postBelongId: new Types.ObjectId(postId) },
      {},
      { limit, skip: offset },
    );
    const getCount = this.commentModel.countDocuments({
      postBelongId: new Types.ObjectId(postId),
    });
    return Promise.all([await getComments, await getCount]);
  }
  async findAllByCommentId(commentId: string, limit: number, offset: number) {
    const getComments = this.commentModel.find(
      { postBelongId: new Types.ObjectId(commentId) },
      {},
      { limit, skip: offset },
    );
    const getCount = this.commentModel.countDocuments({
      postBelongId: new Types.ObjectId(commentId),
    });
    return Promise.all([await getComments, await getCount]);
  }
  async findAllById({
    commentId,
    limit,
    postId,
    offset,
  }: {
    postId: string;
    limit: number;
    offset: number;
    commentId: string;
  }) {
    const getComments = this.commentModel.find(
      {
        postBelongId: new Types.ObjectId(postId),
        commentBelongId: commentId
          ? new Types.ObjectId(commentId)
          : { $exists: false },
      },
      {},
      { limit, skip: offset, sort: { _id: -1 } },
    );
    const getCount = this.commentModel.countDocuments({
      postBelongId: new Types.ObjectId(postId),
      commentBelongId: commentId
        ? new Types.ObjectId(commentId)
        : { $exists: false },
    });
    return Promise.all([await getComments, await getCount]);
  }
  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async increaseCommentCount(id: string) {
    await this.commentModel.findByIdAndUpdate(id, {
      $inc: { commentCount: 1 },
    });
  }
  async likeComment(id: string, userId: string) {
    const data = await this.neo4jService.write(
      `MATCH (u:User),(c:Comment)
      WHERE u.id=$userId AND c.id=$commentId
      MERGE r=(u)-[:LIKE]->(c)
      RETURN r
    `,
      { userId, commentId: id },
    );
    const comment = await this.commentModel.findById(id);

    if (data.summary.counters.containsUpdates()) {
      comment.likeCount++;
      return await comment.save();
    } else return comment;
  }
  async unlikeComment(id: string, userId: string) {
    const data = await this.neo4jService.write(
      `MATCH (u:User)-[r:LIKE]->(c:Comment)
      WHERE u.id=$userId AND c.id=$commentId
      DELETE r
    `,
      { userId, commentId: id },
    );
    const comment = await this.commentModel.findById(id);

    if (data.summary.counters.containsUpdates()) {
      comment.likeCount--;
      return await comment.save();
    } else return comment;
  }

  async checkLikedComment(userId: string, commentId: string) {
    const data = await this.neo4jService.write(
      `MATCH k=(u:User)-[r:LIKE]->(c:Comment)
      WHERE u.id=$userId AND c.id=$commentId
      RETURN k
    `,
      { userId, commentId },
    );
    console.log(data);

    return data.records?.length > 0;
  }
  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
