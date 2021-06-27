import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event, EventDocument } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}
  async createNewEventNode(eventId: string, userId: string) {
    await this.neo4jService.write(
      `MATCH (u:User)
      WHERE u.id=$userId
      CREATE (p:Event)
      SET p+=$props
      CREATE (u)-[:AUTHOR_OF_EVENT]->(p)
      return p
    `,
      { props: { id: eventId }, userId: userId },
    );
  }
  async create(createEventInput: CreateEventInput) {
    const newEvent = await this.eventModel.create({
      ...createEventInput,
      freeSlot: createEventInput.slot,
    });
    this.createNewEventNode(
      newEvent._id.toString(),
      newEvent.hostId.toString(),
    );
    return newEvent;
  }

  async findUserOwnEvent(id: string, limit: number, offset: number) {
    const getCount = this.eventModel.countDocuments({
      hostId: Types.ObjectId(id),
    });
    const getEvent = this.eventModel.find(
      { hostId: Types.ObjectId(id) },
      {},
      { limit, skip: offset },
    );
    return await Promise.all([await getEvent, await getCount]);
  }
  async findAll() {
    return await this.eventModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
