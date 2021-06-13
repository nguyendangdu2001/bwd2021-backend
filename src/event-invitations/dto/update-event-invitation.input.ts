import { CreateEventInvitationInput } from './create-event-invitation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInvitationInput extends PartialType(CreateEventInvitationInput) {
  @Field(() => Int)
  id: number;
}
