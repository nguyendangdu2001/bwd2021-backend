import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AuthResolver } from './auth/auth.resolver';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './common/guards/authenticated';
import { EventsModule } from './events/events.module';
import { CommentsModule } from './comments/comments.module';
import { FriendInvitationsModule } from './friend-invitations/friend-invitations.module';
import { NoticficationsModule } from './noticfications/noticfications.module';
import { EventInvitationsModule } from './event-invitations/event-invitations.module';
import { Neo4jModule } from './neo4j/neo4j.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: { settings: { 'request.credentials': 'include' } },
      cors: { credential: true, origin: true },
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      // include: [AuthResolver],

      // cacheControl: true,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
    }),

    UsersModule,
    AuthModule,
    PostsModule,
    EventsModule,
    CommentsModule,
    FriendInvitationsModule,
    NoticficationsModule,
    EventInvitationsModule,
    Neo4jModule.forRoot({
      host: 'localhost',
      port: 7687,
      scheme: 'neo4j',
      username: 'nguyendangdu2001',
      password: 'yasuo123',
      database: 'neo4j',
    }),
    TagsModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AuthenticatedGuard }],
})
export class AppModule {}
