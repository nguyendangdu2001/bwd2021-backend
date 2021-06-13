import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  firstName?: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  lastName: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  avatar: string;
}
