import { CreateNoticficationInput } from './create-noticfication.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNoticficationInput extends PartialType(CreateNoticficationInput) {
  @Field(() => Int)
  id: number;
}
