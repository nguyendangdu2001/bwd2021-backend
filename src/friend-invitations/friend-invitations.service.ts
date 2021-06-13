import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateFriendInvitationInput } from './dto/create-friend-invitation.input';
import { UpdateFriendInvitationInput } from './dto/update-friend-invitation.input';
import {
  FriendInvitation,
  FriendInvitationDocument,
} from './entities/friend-invitation.entity';

@Injectable()
export class FriendInvitationsService {
  constructor(
    @InjectModel(FriendInvitation.name)
    private readonly friendInvitationModel: Model<FriendInvitationDocument>,
    private readonly neo4jService: Neo4jService,
  ) {}

  async create(
    userId: string,
    createFriendInvitationInput: CreateFriendInvitationInput,
  ) {
    return await this.friendInvitationModel.create({
      from: userId,
      ...createFriendInvitationInput,
    });
  }

  async findAll(id: string) {
    return await this.friendInvitationModel.find({
      to: id,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} friendInvitation`;
  }

  update(id: number, updateFriendInvitationInput: UpdateFriendInvitationInput) {
    return `This action updates a #${id} friendInvitation`;
  }

  async remove(id: string, userId: string) {
    return await this.friendInvitationModel.findOneAndDelete({
      _id: id,
      from: userId,
    });
  }

  async decline(id: string, userAcceptId: string) {
    console.log(id, userAcceptId);

    const friendInvi = await this.friendInvitationModel.findOneAndDelete({
      _id: id,
      to: userAcceptId,
    });
    if (!friendInvi) throw new BadRequestException();

    return friendInvi;
  }

  async accept(id: string, userAcceptId: string) {
    console.log(id, userAcceptId);

    const friendInvi = await this.friendInvitationModel.findOneAndDelete({
      _id: id,
      to: userAcceptId,
    });
    if (!friendInvi) throw new BadRequestException();
    await this.neo4jService.write(
      `MATCH (from:User),(to:User)
    WHERE from.id=$from AND to.id=$to
    CREATE (from)-[r:FRIEND]->(to)
    RETURN r
    `,
      { from: friendInvi.from.toString(), to: friendInvi.to.toString() },
    );
    return friendInvi;
  }
}
