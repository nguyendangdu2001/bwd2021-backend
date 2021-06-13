import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { FriendInvitationsService } from './friend-invitations.service';
import { FriendInvitation } from './entities/friend-invitation.entity';
import { CreateFriendInvitationInput } from './dto/create-friend-invitation.input';
import { UpdateFriendInvitationInput } from './dto/update-friend-invitation.input';
import { User } from 'src/common/decorators';
import { UserEntity } from 'src/users/entities/user.entity';

@Resolver(() => FriendInvitation)
export class FriendInvitationsResolver {
  constructor(
    private readonly friendInvitationsService: FriendInvitationsService,
  ) {}

  @Mutation(() => FriendInvitation)
  createFriendInvitation(
    @Args('createFriendInvitationInput')
    createFriendInvitationInput: CreateFriendInvitationInput,
    @User() user: UserEntity,
  ) {
    return this.friendInvitationsService.create(
      user.id,
      createFriendInvitationInput,
    );
  }

  @Query(() => [FriendInvitation], { name: 'userFriendInvitations' })
  findAll(@User() user: UserEntity) {
    return this.friendInvitationsService.findAll(user.id);
  }

  // @Query(() => FriendInvitation, { name: 'friendInvitation' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.friendInvitationsService.findOne(id);
  // }

  // @Mutation(() => FriendInvitation)
  // updateFriendInvitation(@Args('updateFriendInvitationInput') updateFriendInvitationInput: UpdateFriendInvitationInput) {
  //   return this.friendInvitationsService.update(updateFriendInvitationInput.id, updateFriendInvitationInput);
  // }

  @Mutation(() => FriendInvitation)
  removeFriendInvitation(
    @Args('id', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return this.friendInvitationsService.remove(id, user.id);
  }
  @Mutation(() => FriendInvitation)
  acceptFriendInvitation(
    @Args('id', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return this.friendInvitationsService.accept(id, user.id);
  }
}
