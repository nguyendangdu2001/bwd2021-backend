import { Test, TestingModule } from '@nestjs/testing';
import { FriendInvitationsService } from './friend-invitations.service';

describe('FriendInvitationsService', () => {
  let service: FriendInvitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendInvitationsService],
    }).compile();

    service = module.get<FriendInvitationsService>(FriendInvitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
