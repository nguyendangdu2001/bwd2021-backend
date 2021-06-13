import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Event } from 'src/events/entities/event.entity';

export type UserDocument = User & Document;
export type UserEntity = User;
@Schema()
@ObjectType()
@InputType('GoogleInput')
export class Google {
  @Field()
  @Prop()
  id: string;

  @Field()
  @Prop()
  email: string;

  @Field({ nullable: true })
  @Prop()
  name: string;
}

const GoogleSchema = SchemaFactory.createForClass(Google);

@Schema({ timestamps: true })
@ObjectType()
export class User {
  // @Prop({ alias: 'id', type: MongooseSchema.Types.ObjectId })
  // _id?: string;

  _id!: string;

  @Field(() => ID, { description: 'User Id' })
  id!: string;

  @Prop()
  @Field({ description: 'First name', nullable: true })
  firstName?: string;

  @Prop()
  @Field({ description: 'LastName', nullable: true })
  lastName: string;

  @Prop()
  @Field({ description: 'Username', nullable: true })
  userName?: string;

  @Prop({ select: false })
  // @Field({ description: 'Password', nullable: true })
  password?: string;

  @Field(() => [User], { description: 'Password', nullable: true })
  friends?: User[];

  @Field(() => [Event], { description: 'Password', nullable: true })
  events?: Event[];

  // @Field(() => [Post], { description: "user's post", nullable: true })
  // posts?: Post[];

  @Prop()
  @Field({ description: 'Example field (placeholder)', nullable: true })
  avatar: string;

  @Prop({ default: false })
  @Field({ description: 'Example field (placeholder)', nullable: true })
  verified: boolean;

  @Prop({ type: GoogleSchema })
  @Field(() => Google, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  google?: Google;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  createdAt: Date;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
