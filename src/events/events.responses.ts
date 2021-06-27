import { ObjectType } from '@nestjs/graphql';
import relayTypes from '../relay.types';
import { Event } from './entities/event.entity';

@ObjectType()
export class EventsResponse extends relayTypes<Event>(Event) {}
