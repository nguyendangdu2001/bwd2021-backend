import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNoticficationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
