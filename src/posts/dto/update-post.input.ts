import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PickType(CreatePostInput, ['content']) {
  @Field(() => Int)
  id: number;
}
