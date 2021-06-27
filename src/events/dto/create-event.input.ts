import { InputType, PickType } from '@nestjs/graphql';
import { Event } from '../entities/event.entity';

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
}
