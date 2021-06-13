import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventInvitationsService } from './event-invitations.service';
import { EventInvitation } from './entities/event-invitation.entity';
import { CreateEventInvitationInput } from './dto/create-event-invitation.input';
import { UpdateEventInvitationInput } from './dto/update-event-invitation.input';

@Resolver(() => EventInvitation)
export class EventInvitationsResolver {
  constructor(
    private readonly eventInvitationsService: EventInvitationsService,
  ) {}

  @Mutation(() => EventInvitation)
  createEventInvitation(
    @Args('createEventInvitationInput')
    createEventInvitationInput: CreateEventInvitationInput,
  ) {
    return this.eventInvitationsService.create(createEventInvitationInput);
  }

  @Query(() => [EventInvitation], { name: 'eventInvitations' })
  findAll() {
    return this.eventInvitationsService.findAll();
  }

  // @Query(() => EventInvitation, { name: 'eventInvitation' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.eventInvitationsService.findOne(id);
  // }

  // @Mutation(() => EventInvitation)
  // updateEventInvitation(@Args('updateEventInvitationInput') updateEventInvitationInput: UpdateEventInvitationInput) {
  //   return this.eventInvitationsService.update(updateEventInvitationInput.id, updateEventInvitationInput);
  // }

  @Mutation(() => EventInvitation)
  removeEventInvitation(@Args('id', { type: () => Int }) id: number) {
    return this.eventInvitationsService.remove(id);
  }
  @Mutation(() => EventInvitation)
  acceptEventInvitation(@Args('id', { type: () => Int }) id: number) {
    return this.eventInvitationsService.remove(id);
  }
}
