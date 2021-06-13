import { Module } from '@nestjs/common';
import { FriendInvitationsService } from './friend-invitations.service';
import { FriendInvitationsResolver } from './friend-invitations.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FriendInvitation,
  FriendInvitationSchema,
} from './entities/friend-invitation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FriendInvitation.name, schema: FriendInvitationSchema },
    ]),
  ],
  providers: [FriendInvitationsResolver, FriendInvitationsService],
})
export class FriendInvitationsModule {}
