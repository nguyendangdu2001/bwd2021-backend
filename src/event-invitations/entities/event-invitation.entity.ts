import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';

export type EventInvitationDocument = EventInvitation & Document;

@Schema({ timestamps: true })
@ObjectType()
export class EventInvitation {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  fromId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  toId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Event.name })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  eventId: MongooseSchema.Types.ObjectId;

  @Field(() => User, { description: 'Example field (placeholder)' })
  from: User;

  @Field(() => User, { description: 'Example field (placeholder)' })
  to: User;

  @Field(() => Event, { description: 'Example field (placeholder)' })
  event: Event;

  @Field({ description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field({ description: 'Example field (placeholder)' })
  updatedAt: Date;
}

export const EventInvitationSchema =
  SchemaFactory.createForClass(EventInvitation);
