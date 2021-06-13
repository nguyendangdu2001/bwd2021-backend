import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { GoogleProfile } from 'src/auth/interface/GoogleProfile.interface';
import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly neo4jService: Neo4jService,
  ) {
    // console.log(neo4jService);
  }

  async findByLocalAccount(userName: string, password: string) {
    return await this.userModel.findOne({ userName, password });
  }

  async createNewUserNode(id: string) {
    return await this.neo4jService.write(
      `CREATE (u:User)
    SET u+=$properties
    RETURN u
    `,
      { properties: { id } },
    );
  }
  async create(createUserInput: CreateUserInput) {
    const newUser = await this.userModel.create(createUserInput);
    this.createNewUserNode(newUser.id);
    return newUser;
  }

  async findAll(limit: number, offset: number) {
    const getCount = this.userModel.countDocuments();
    const getUser = this.userModel.find({}, {}, { limit, skip: offset });

    return await Promise.all([await getUser, await getCount]);
  }

  async findOne(query: FilterQuery<UserDocument>) {
    return await this.userModel.findOne(query);
  }

  findOneById(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findByIdAndUpdate(id, updateUserInput);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  async findOrCreateGoogleUser(googleId: string, googleProfile: GoogleProfile) {
    console.log('go here 2');
    try {
      const user = await this.userModel
        .findOne({ 'google.id': googleId })
        .exec();
      if (user) {
        return user;
      } else {
        const newUser = await this.userModel.create({
          // userName: 'google' + googleProfile.payload.email,
          lastName: googleProfile.payload.name,
          avatar: googleProfile.payload.picture,
          google: {
            id: googleId,
            name: googleProfile.payload.name,
            email: googleProfile.payload.email,
          },
        });
        const data = await this.createNewUserNode(newUser.id);
        console.log(data, 'aaaaa');

        return newUser;
      }
    } catch (error) {
      console.log(error);

      throw new UnauthorizedException();
    }
  }
}
