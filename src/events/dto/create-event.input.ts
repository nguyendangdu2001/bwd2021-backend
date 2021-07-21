import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Event } from '../entities/event.entity';

@InputType()
class TagEventInput {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  isNew: boolean;
}
@InputType()
export class CreateEventInput extends PickType(
  Event,
  [
    'desc',
    'startDate',
    'endDate',
    'location',
    'locationName',
    'name',
    'price',
    'slot',
    'img',
  ],
  InputType,
) {
  hostId: string;

  @Field(() => [TagEventInput], { nullable: true })
  tags: TagEventInput[];
}
