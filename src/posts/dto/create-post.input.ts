import { InputType, PickType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput extends PickType(
  Post,
  ['content', 'media', 'eventId'],
  InputType,
) {
  authorId: string;
}
