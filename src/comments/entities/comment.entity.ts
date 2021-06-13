import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

export type CommentDocument = Document & Comment;

@Schema({ timestamps: true })
@ObjectType()
export class Comment {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  userId: MongooseSchema.Types.ObjectId;

  @Field(() => User)
  user: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'posts' })
  @Field(() => ID, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  postId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Comment.name })
  @Field(() => ID, {
    description: 'Id of comment this belong to',
    nullable: true,
  })
  commentBelongId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'posts' })
  @Field(() => ID, {
    description: 'Id of post this belong to',
    nullable: true,
  })
  postBelongId: Types.ObjectId;

  @Prop({ default: '' })
  @Field({
    description: 'content of comment (text)',
    nullable: true,
  })
  text: string;

  @Prop()
  @Field(() => [String], {
    description: 'media link',
    nullable: true,
  })
  media: string[];

  @Prop({ default: 0 })
  @Field({
    description: '',
  })
  likeCount: number;

  @Field({
    description: '',
  })
  createdAt: Date;

  @Field({
    description: '',
  })
  updatedAt: Date;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
