import { Injectable } from '@nestjs/common';
import { CreateNoticficationInput } from './dto/create-noticfication.input';
import { UpdateNoticficationInput } from './dto/update-noticfication.input';

@Injectable()
export class NoticficationsService {
  create(createNoticficationInput: CreateNoticficationInput) {
    return 'This action adds a new noticfication';
  }

  findAll() {
    return `This action returns all noticfications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noticfication`;
  }

  update(id: number, updateNoticficationInput: UpdateNoticficationInput) {
    return `This action updates a #${id} noticfication`;
  }

  remove(id: number) {
    return `This action removes a #${id} noticfication`;
  }
}
