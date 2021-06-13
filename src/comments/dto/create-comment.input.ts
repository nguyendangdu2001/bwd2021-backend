import { InputType, PickType } from '@nestjs/graphql';
import { Comment } from '../entities/comment.entity';

@InputType()
export class CreateCommentInput extends PickType(
  Comment,
  ['text', 'media', 'postBelongId', 'commentBelongId', 'postId'],
  InputType,
) {
  userId: string;
}
