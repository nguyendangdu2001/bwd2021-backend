import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag, TagDocument } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>,
  ) {}
  async create(createTagInput: CreateTagInput) {
    return await this.tagModel.create(createTagInput);
  }

  findAll() {
    return `This action returns all tags`;
  }
  async search(key: string, limit: number, offset: number) {
    const getTags = this.tagModel.find(
      { name: { $regex: key, $options: 'siu' } },
      {},
      { limit, skip: offset },
    );
    const getCount = this.tagModel.countDocuments({
      name: { $regex: key, $options: 'siu' },
    });
    return await Promise.all([await getTags, await getCount]);
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
