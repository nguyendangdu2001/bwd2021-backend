import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from 'src/common/decorators';
import { User as UserEntity } from 'src/users/entities/user.entity';
import { PostsResponse } from './posts.response';
import ConnectionArgs from 'src/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';
import { UserPostsArgs } from './dto/user-posts.args';
import { UsersService } from 'src/users/users.service';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsService } from 'src/comments/comments.service';
import { CommentsResponse } from 'src/comments/comments.response';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly userService: UsersService,
    private readonly commentService: CommentsService,
  ) {}

  @Mutation(() => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @User() user: UserEntity,
  ) {
    return this.postsService.create({ ...createPostInput, authorId: user.id });
  }

  @Query(() => PostsResponse, { name: 'posts' })
  async findAll(@Args() args: ConnectionArgs) {
    const { limit, offset } = args.pagingParams();
    const [posts, count] = await this.postsService.findAll(limit, offset);
    const page = connectionFromArraySlice(posts, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
    return { ...page };
  }
  @Query(() => PostsResponse, { name: 'userPosts' })
  async findPostOfUser(@Args() args: UserPostsArgs) {
    const { limit, offset } = args.pagingParams();
    const [posts, count] = await this.postsService.findAllByUserId(
      args.userId,
      limit,
      offset,
    );
    const page = connectionFromArraySlice(posts, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
    return { ...page };
  }
  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postsService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.remove(id);
  }

  @Mutation(() => Post)
  async likePost(
    @Args('idPost', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return await this.postsService.likePost(user.id, id);
  }
  @Mutation(() => Post)
  async unLikePost(
    @Args('idPost', { type: () => ID }) id: string,
    @User() user: UserEntity,
  ) {
    return await this.postsService.unLikePost(user.id, id);
  }
  @ResolveField('isUserLiked', () => Boolean)
  async checkLiked(@Parent() post: Post, @User() user: UserEntity) {
    return await this.postsService.checkLikedPost(user.id, post.id);
  }

  @ResolveField('author', () => UserEntity)
  async getAuthor(@Parent() post: Post) {
    console.log('resove author');

    return await this.userService.findOneById(post.authorId.toString());
  }

  @ResolveField('comments', () => CommentsResponse)
  async getComments(@Parent() post: Post, @Args() args: ConnectionArgs) {
    const { limit, offset } = args.pagingParams();
    const [posts, count] = await this.commentService.findAllByPostId(
      post.id,
      limit,
      offset,
    );
    const page = connectionFromArraySlice(posts, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
    return { ...page };

    return await this.userService.findOneById(post.authorId.toString());
  }
}
