import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User as UserEntity } from 'src/users/entities/user.entity';

export const User = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    return (ctx.getContext().req.user as UserEntity) || null;
  },
);
