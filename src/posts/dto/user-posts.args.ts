import { ArgsType, Field, ID } from '@nestjs/graphql';
import ConnectionArgs from 'src/connection.args';

@ArgsType()
export class UserPostsArgs extends ConnectionArgs {
  @Field(() => ID)
  userId: string;
}
