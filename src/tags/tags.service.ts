import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag, TagDocument } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}
  async createTagNode(tagId: string) {
    const p = await this.neo4jService.write(
      `
      CREATE (p:Tag)
      SET p+=$props
      return p
    `,
      { props: { id: tagId } },
    );

    return p;
  }
  async create(createTagInput: CreateTagInput) {
    const existTag = await this.tagModel.findOne({
      name: { $regex: `^${createTagInput.name}$` },
    });

    if (existTag) return existTag;
    const newTag = await this.tagModel.create(createTagInput);
    await this.createTagNode(newTag.id.toString());
    return newTag;
  }

  findAll() {
    return `This action returns all tags`;
  }
  async search(key: string, limit: number, offset: number) {
    const getTags = this.tagModel.find(
      {
        name: { $regex: key, $options: 'm' },
      },
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
