import { Test, TestingModule } from '@nestjs/testing';
import { FriendInvitationsResolver } from './friend-invitations.resolver';
import { FriendInvitationsService } from './friend-invitations.service';

describe('FriendInvitationsResolver', () => {
  let resolver: FriendInvitationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendInvitationsResolver, FriendInvitationsService],
    }).compile();

    resolver = module.get<FriendInvitationsResolver>(FriendInvitationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
