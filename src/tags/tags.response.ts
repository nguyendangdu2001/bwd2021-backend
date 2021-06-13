import { ObjectType } from '@nestjs/graphql';
import relayTypes from '../relay.types';
import { Tag } from './entities/tag.entity';

@ObjectType()
export class TagsResponse extends relayTypes<Tag>(Tag) {}
