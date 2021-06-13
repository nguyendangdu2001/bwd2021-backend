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
    private readonly commentService: Model<CommentDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}
  async create(createCommentInput: CreateCommentInput) {
    const newCommnents = await this.commentService.create(createCommentInput);
    this.createCommentNode(
      newCommnents.id,
      createCommentInput.postBelongId.toString(),
      newCommnents?.commentBelongId?.toString(),
    );

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
    const getComments = this.commentService.find(
      { postBelongId: new Types.ObjectId(postId) },
      {},
      { limit, skip: offset },
    );
    const getCount = this.commentService.countDocuments({
      postBelongId: new Types.ObjectId(postId),
    });
    return Promise.all([await getComments, await getCount]);
  }
  async findAllByCommentId(commentId: string, limit: number, offset: number) {
    const getComments = this.commentService.find(
      { postBelongId: new Types.ObjectId(commentId) },
      {},
      { limit, skip: offset },
    );
    const getCount = this.commentService.countDocuments({
      postBelongId: new Types.ObjectId(commentId),
    });
    return Promise.all([await getComments, await getCount]);
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
