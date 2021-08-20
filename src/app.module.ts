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
import { ServeStaticModule } from '@nestjs/serve-static';

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
      url: 'neo4j+s://7b9239c3.databases.neo4j.io',
      scheme: 'neo4j',
      username: 'neo4j',
      password: 'yasuo123',
      database: 'neo4j',
    }),
    TagsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'distClient'),
    }),
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AuthenticatedGuard }],
})
export class AppModule {}
