import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type FriendInvitationDocument = FriendInvitation & Document;

@Schema({ timestamps: true })
@ObjectType()
export class FriendInvitation {
  @Field(() => ID)
  id!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  from: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  to: Types.ObjectId;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  updatedAt: Date;
}

export const FriendInvitationSchema =
  SchemaFactory.createForClass(FriendInvitation);
