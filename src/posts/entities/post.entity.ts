import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Comment } from 'src/comments/entities/comment.entity';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Post {
  @Field(() => ID, { description: 'User Id' })
  id!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID)
  authorId: Types.ObjectId;

  @Field(() => User)
  author: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Event.name })
  @Field(() => ID, { nullable: true })
  eventId: MongooseSchema.Types.ObjectId;

  @Field(() => Event, { nullable: true })
  event: Event;
  @Prop()
  @Field({ nullable: true })
  content: string;

  @Prop()
  @Field(() => [String], { nullable: true })
  media: string[];

  @Prop({ default: 0 })
  @Field({ nullable: true })
  likeCount: number;

  @Prop({ default: 0 })
  @Field({ nullable: true })
  commentCount: number;

  @Field(() => [User], { nullable: true })
  peopleLiked: User[];

  @Field(() => [Comment], { nullable: true })
  comments: Comment[];

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  isUserLiked: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
