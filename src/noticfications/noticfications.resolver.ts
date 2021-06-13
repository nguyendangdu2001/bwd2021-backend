import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NoticficationsService } from './noticfications.service';
import {
  Noticfication,
  NoticficationUnion,
} from './entities/noticfication.entity';
import { CreateNoticficationInput } from './dto/create-noticfication.input';
import { UpdateNoticficationInput } from './dto/update-noticfication.input';

@Resolver(() => Noticfication)
export class NoticficationsResolver {
  constructor(private readonly noticficationsService: NoticficationsService) {}

  // @Mutation(() => NoticficationUnion)
  // createNoticfication(
  //   @Args('createNoticficationInput')
  //   createNoticficationInput: CreateNoticficationInput,
  // ) {
  //   return this.noticficationsService.create(createNoticficationInput);
  // }

  @Query(() => [Noticfication], { name: 'noticfications' })
  findAll() {
    return this.noticficationsService.findAll();
  }

  // @Query(() => Noticfication, { name: 'noticfication' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.noticficationsService.findOne(id);
  // }

  // @Mutation(() => Noticfication)
  // updateNoticfication(
  //   @Args('updateNoticficationInput')
  //   updateNoticficationInput: UpdateNoticficationInput,
  // ) {
  //   return this.noticficationsService.update(
  //     updateNoticficationInput.id,
  //     updateNoticficationInput,
  //   );
  // }

  // @Mutation(() => Noticfication)
  // removeNoticfication(@Args('id', { type: () => Int }) id: number) {
  //   return this.noticficationsService.remove(id);
  // }
}
