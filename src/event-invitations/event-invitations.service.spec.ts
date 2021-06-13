import { Test, TestingModule } from '@nestjs/testing';
import { EventInvitationsService } from './event-invitations.service';

describe('EventInvitationsService', () => {
  let service: EventInvitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventInvitationsService],
    }).compile();

    service = module.get<EventInvitationsService>(EventInvitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
