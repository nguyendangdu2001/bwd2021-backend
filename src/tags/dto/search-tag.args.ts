import { ArgsType, Field } from '@nestjs/graphql';
import ConnectionArgs from 'src/connection.args';

@ArgsType()
export class SearchTagArgs extends ConnectionArgs {
  @Field()
  key: string;
}
