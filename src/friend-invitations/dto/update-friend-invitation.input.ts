import { CreateFriendInvitationInput } from './create-friend-invitation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFriendInvitationInput extends PartialType(
  CreateFriendInvitationInput,
) {
  @Field(() => Int)
  id: number;
}
