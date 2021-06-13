import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TagDocument = Tag & Document;

@Schema({ timestamps: true, strict: true })
@ObjectType()
export class Tag {
  @Prop({
    index: { unique: true, type: 'text' },
    unique: true,
    trim: true,
    required: true,
  })
  @Field({ description: 'Example field (placeholder)' })
  name: string;

  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field({ description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field({ description: 'Example field (placeholder)' })
  updatedAt: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
