import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGuard extends AuthGuard('local') implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const args = ctx.getArgs();
    console.log(args);

    req.body.username = args.loginInput.userName;
    req.body.password = args.loginInput.password;
    console.log(req.body);

    console.log('go here');

    const result = (await super.canActivate(context)) as boolean;
    console.log('go here');

    // res.cookies['test'] = 'adsf';
    // await super.logIn(req);

    return result;
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  // public handleRequest<User>(err: Error, user: User): User {
  //   if (err) {
  //     throw err;
  //   }
  //   return user;
  // }
}
