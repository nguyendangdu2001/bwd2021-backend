import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Event {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;
  @Prop()
  @Field({ description: 'Example field (placeholder)' })
  name: string;
  @Field(() => User, { description: 'Example field (placeholder)' })
  host: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'user' })
  hostId: Types.ObjectId;

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  desc: string;

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  img: string;

  @Prop()
  @Field({ description: 'Example field (placeholder)' })
  startDate: Date;

  @Prop()
  @Field({ description: 'Example field (placeholder)' })
  endDate: Date;

  @Field({ description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field({ description: 'Example field (placeholder)' })
  updatedAt: Date;

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  slot: number;

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  price: number;

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  freeSlot: number;

  @Field(() => [User], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  userParticipate: User[];

  @Prop()
  @Field(() => [Number, Number], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  location: [number, number];

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  locationName: string;

  @Field(() => [Tag], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  tags: Tag[];

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Tag.name })
  @Field(() => [ID], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  tagIds: MongooseSchema.Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
