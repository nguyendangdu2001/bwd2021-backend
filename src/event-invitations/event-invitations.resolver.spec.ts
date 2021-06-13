import { Test, TestingModule } from '@nestjs/testing';
import { EventInvitationsResolver } from './event-invitations.resolver';
import { EventInvitationsService } from './event-invitations.service';

describe('EventInvitationsResolver', () => {
  let resolver: EventInvitationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventInvitationsResolver, EventInvitationsService],
    }).compile();

    resolver = module.get<EventInvitationsResolver>(EventInvitationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
