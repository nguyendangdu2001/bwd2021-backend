import { InputType, Field } from '@nestjs/graphql';
import { Google } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Example field (placeholder)', nullable: true })
  firstName?: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  lastName: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  userName?: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  password?: string;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  avatar?: string;

  @Field(() => Google, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  google?: Google;
}
