import { Test, TestingModule } from '@nestjs/testing';
import { NoticficationsResolver } from './noticfications.resolver';
import { NoticficationsService } from './noticfications.service';

describe('NoticficationsResolver', () => {
  let resolver: NoticficationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticficationsResolver, NoticficationsService],
    }).compile();

    resolver = module.get<NoticficationsResolver>(NoticficationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
