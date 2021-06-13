import { Module } from '@nestjs/common';
import { EventInvitationsService } from './event-invitations.service';
import { EventInvitationsResolver } from './event-invitations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FriendInvitation,
  FriendInvitationSchema,
} from 'src/friend-invitations/entities/friend-invitation.entity';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: FriendInvitation.name, schema: FriendInvitationSchema },
    // ]),
  ],
  providers: [EventInvitationsResolver, EventInvitationsService],
})
export class EventInvitationsModule {}
