import { ObjectType } from '@nestjs/graphql';
import relayTypes from '../relay.types';
import { Post } from './entities/post.entity';

@ObjectType()
export class PostsResponse extends relayTypes<Post>(Post) {}
