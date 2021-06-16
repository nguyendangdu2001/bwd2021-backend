import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
  ID,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { User } from 'src/common/decorators';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CommentsResponse } from './comments.response';
import { CommentsByIdArgs } from './dto/find-all-by-id.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(() => Comment)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @User() user: UserEntity,
  ) {
    return this.commentsService.create({
      ...createCommentInput,
      userId: user.id,
    });
  }

  @Query(() => [Comment], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }
  @Query(() => CommentsResponse, { name: 'commentsById' })
  async findAllById(@Args() args: CommentsByIdArgs) {
    const { limit, offset } = args.pagingParams();
    const [posts, count] = await this.commentsService.findAllById({
      limit,
      offset,
      postId: args.postId,
      commentId: args.commentId,
    });
    const page = connectionFromArraySlice(posts, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
    return { ...page };
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return this.commentsService.update(
      updateCommentInput.id,
      updateCommentInput,
    );
  }

  @Mutation(() => Comment)
  removeComment(@Args('id', { type: () => ID }) id: number) {
    return this.commentsService.remove(id);
  }
  @Mutation(() => Comment)
  async likeComment(
    @Args('id', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return await this.commentsService.likeComment(id, user.id);
  }
  @Mutation(() => Comment)
  async unlikeComment(
    @Args('id', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return await this.commentsService.unlikeComment(id, user.id);
  }

  @ResolveField('user', () => UserEntity)
  async getAuthor(@Parent() comment: Comment) {
    return await this.userService.findOneById(comment.userId.toString());
  }

  @ResolveField('isUserLiked', () => Boolean)
  async checkUserLiked(@Parent() comment: Comment, @User() user: UserEntity) {
    return await this.commentsService.checkLikedComment(
      user.id,
      comment.id.toString(),
    );
  }
}
