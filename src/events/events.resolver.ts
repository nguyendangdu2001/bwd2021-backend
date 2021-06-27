import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { User } from 'src/common/decorators';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { EventsResponse } from './events.responses';
import { connectionFromArraySlice } from 'graphql-relay';
import ConnectionArgs from 'src/connection.args';
@Resolver(() => Event)
export class EventsResolver {
  constructor(
    private readonly eventsService: EventsService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(() => Event)
  createEvent(
    @Args('createEventInput') createEventInput: CreateEventInput,
    @User() user: UserEntity,
  ) {
    return this.eventsService.create({ ...createEventInput, hostId: user.id });
  }

  @Query(() => [Event], { name: 'events' })
  findAll() {
    return this.eventsService.findAll();
  }
  @Query(() => EventsResponse, { name: 'myEvent' })
  async getMyEvent(@User() user: UserEntity, @Args() args: ConnectionArgs) {
    const { limit, offset } = args.pagingParams();
    const [posts, count] = await this.eventsService.findUserOwnEvent(
      user.id,
      limit,
      offset,
    );
    const page = connectionFromArraySlice(posts, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
    return { ...page };
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.remove(id);
  }
  @ResolveField('host', () => UserEntity)
  async getUser(@Parent() event: Event) {
    return await this.userService.findOneById(event.hostId.toString());
  }
}
