import { ArgsType, Field, ID } from '@nestjs/graphql';
import ConnectionArgs from 'src/connection.args';

@ArgsType()
export class CommentsByIdArgs extends ConnectionArgs {
  @Field(() => ID, { nullable: true })
  commentId: string;

  @Field(() => ID)
  postId: string;
}
