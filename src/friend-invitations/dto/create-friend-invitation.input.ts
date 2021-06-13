import { InputType, Int, Field, PickType, PartialType } from '@nestjs/graphql';
import { FriendInvitation } from '../entities/friend-invitation.entity';

@InputType()
export class CreateFriendInvitationInput extends PickType(
  FriendInvitation,
  ['to'],
  InputType,
) {}
