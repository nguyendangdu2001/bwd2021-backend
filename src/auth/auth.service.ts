import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { Profile } from 'passport-facebook-token';
import { UsersService } from 'src/users/users.service';
import { RegisterInput } from './dto/register.input';
import { GoogleProfile } from './interface/GoogleProfile.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  // async validateFacebookUser(profile: Profile) {
  //   try {
  //     const user = await this.userService.findOrCreateFacebookUser(profile);
  //     return user;
  //   } catch (error) {
  //     throw new UnauthorizedException();
  //   }
  // }
  async validate(userId: string) {
    try {
      console.log('validate');

      const user = await this.userService.findOneById(userId);
      if (!user) throw new UnauthorizedException();
      return user;
    } catch (error) {
      return null;
    }
  }
  async validateGoogleUser(googleId: string, profile: GoogleProfile) {
    try {
      console.log('validate');

      const user = await this.userService.findOrCreateGoogleUser(
        googleId,
        profile,
      );
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validateNormalUser(userName: string, password: string) {
    const user = await this.userService.findByLocalAccount(userName, password);
    if (!user) throw new BadRequestException();
    return user;
  }
  async register(req, registerInput: RegisterInput) {
    const checkExist = await this.userService.findOne({
      userName: registerInput.userName,
    });
    if (checkExist) throw new Error('Username exist');
    const user = await this.userService.create(registerInput);
    const signed = this.jwt.sign({ userId: user.id });
    console.log(signed);

    req.session.eventBuzzjwt = signed;
    return { ...user.toObject(), token: signed, id: user.id };
  }
}
