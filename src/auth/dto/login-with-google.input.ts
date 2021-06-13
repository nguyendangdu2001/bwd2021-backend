import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginWithGoogleInput {
  @Field()
  id_token: string;
}
