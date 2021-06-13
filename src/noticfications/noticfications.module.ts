import { Module } from '@nestjs/common';
import { NoticficationsService } from './noticfications.service';
import { NoticficationsResolver } from './noticfications.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EventNoticfication,
  EventNoticficationSchema,
  FriendInvitationNoticfication,
  FriendInvitationNoticficationSchema,
  Noticfication,
  NoticficationSchema,
  PostNoticfication,
  PostNoticficationSchema,
} from './entities/noticfication.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Noticfication.name,
        schema: NoticficationSchema,
        discriminators: [
          { name: PostNoticfication.name, schema: PostNoticficationSchema },
          {
            name: FriendInvitationNoticfication.name,
            schema: FriendInvitationNoticficationSchema,
          },
          { name: EventNoticfication.name, schema: EventNoticficationSchema },
        ],
      },
    ]),
  ],
  providers: [NoticficationsResolver, NoticficationsService],
})
export class NoticficationsModule {}
