import { ObjectType } from '@nestjs/graphql';
import relayTypes from 'src/relay.types';
import { Comment } from './entities/comment.entity';

@ObjectType()
export class CommentsResponse extends relayTypes<Comment>(Comment) {}
