import { Test, TestingModule } from '@nestjs/testing';
import { NoticficationsService } from './noticfications.service';

describe('NoticficationsService', () => {
  let service: NoticficationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticficationsService],
    }).compile();

    service = module.get<NoticficationsService>(NoticficationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
