import { Injectable } from '@nestjs/common';
import { CreateEventInvitationInput } from './dto/create-event-invitation.input';
import { UpdateEventInvitationInput } from './dto/update-event-invitation.input';

@Injectable()
export class EventInvitationsService {
  create(createEventInvitationInput: CreateEventInvitationInput) {
    return 'This action adds a new eventInvitation';
  }

  findAll() {
    return `This action returns all eventInvitations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventInvitation`;
  }

  update(id: number, updateEventInvitationInput: UpdateEventInvitationInput) {
    return `This action updates a #${id} eventInvitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventInvitation`;
  }
}
