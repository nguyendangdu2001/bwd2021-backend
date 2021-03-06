import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { TagsService } from 'src/tags/tags.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event, EventDocument } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
    private readonly neo4jService: Neo4jService,
    private readonly tagService: TagsService,
  ) {}
  async createNewEventNode(
    eventId: string,
    userId: string,
    tagIds: string[] = [],
  ) {
    await this.neo4jService.write(
      `CREATE (p:Event)
      SET p+=$props
      WITH p
      MATCH (u:User)
      WHERE u.id=$userId
      MERGE (u)-[:AUTHOR_OF_EVENT]->(p)
      WITH p
      MATCH (t:Tag)
      WHERE t.id IN $tagIds
      MERGE (p)-[:HAS_TAG]->(t)
      RETURN p
    `,
      { props: { id: eventId }, userId: userId, tagIds },
    );
  }
  async create(createEventInput: CreateEventInput) {
    const tags = await Promise.all(
      createEventInput.tags?.map(async (tag) => {
        if (tag.isNew) {
          const newTag = await this.tagService.create({ name: tag.name });
          return newTag.id.toString();
        }
        return tag.id;
      }),
    );
    const newEvent = await this.eventModel.create({
      ...createEventInput,
      freeSlot: createEventInput.slot,
      tagIds: tags,
    });
    this.createNewEventNode(
      newEvent._id.toString(),
      newEvent.hostId.toString(),
      tags,
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
