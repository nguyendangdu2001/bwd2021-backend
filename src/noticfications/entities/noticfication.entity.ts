import {
  ObjectType,
  Field,
  registerEnumType,
  ID,
  PartialType,
  OmitType,
  createUnionType,
} from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from 'src/events/entities/event.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
export enum NoticfiationTypes {
  EVENT_NOTICFICATION = 'EVENT_NOTICFICATION',
  POST_NOTICFIATION = 'POST_NOTICFIATION',
  FRIEND_INVITAION_NOTICFICATION = 'FRIEND_INVITAION_NOTICFICATION',
}
registerEnumType(NoticfiationTypes, {
  name: 'NoticficationTypes',
});

@Schema({ timestamps: true, discriminatorKey: 'type' })
@ObjectType()
export class Noticfication {
  @Prop({ type: [String], enum: Object.values(NoticfiationTypes) })
  @Field(() => NoticfiationTypes, {
    description: 'Example field (placeholder)',
  })
  type: NoticfiationTypes;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, {
    description: 'Example field (placeholder)',
  })
  toId: MongooseSchema.Types.ObjectId;

  @Field(() => User, {
    description: 'Example field (placeholder)',
  })
  to: User;

  @Field({
    description: 'Example field (placeholder)',
  })
  createdAt: Date;

  @Field({
    description: 'Example field (placeholder)',
  })
  updatedAt: Date;
}
export const NoticficationSchema = SchemaFactory.createForClass(Noticfication);

@ObjectType()
@Schema()
export class EventNoticfication extends OmitType(Noticfication, []) {
  type = NoticfiationTypes.EVENT_NOTICFICATION;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Event.name })
  eventId: MongooseSchema.Types.ObjectId;
}
export const EventNoticficationSchema =
  SchemaFactory.createForClass(EventNoticfication);

@ObjectType()
@Schema()
export class FriendInvitationNoticfication extends OmitType(Noticfication, []) {
  type = NoticfiationTypes.FRIEND_INVITAION_NOTICFICATION;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  fromId: MongooseSchema.Types.ObjectId;
}

export const FriendInvitationNoticficationSchema = SchemaFactory.createForClass(
  FriendInvitationNoticfication,
);

@ObjectType()
@Schema()
export class PostNoticfication extends OmitType(Noticfication, []) {
  type = NoticfiationTypes.POST_NOTICFIATION;

  @Field(() => ID, {
    description: 'Example field (placeholder)',
  })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Post.name })
  postId: MongooseSchema.Types.ObjectId;

  @Field(() => ID, {
    description: 'Example field (placeholder)',
  })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  fromId: MongooseSchema.Types.ObjectId;

  @Field(() => Post, {
    description: 'Example field (placeholder)',
  })
  post: Post;

  @Field(() => User, {
    description: 'Example field (placeholder)',
  })
  from: User;
}
export const PostNoticficationSchema =
  SchemaFactory.createForClass(PostNoticfication);

export const NoticficationUnion = createUnionType({
  name: 'UNoticfication',
  types: () => [
    PostNoticfication,
    FriendInvitationNoticfication,
    EventNoticfication,
  ],
});
