import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';

import { JwtPayload } from '../jwt-payload/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(authCredentialDto: AuthCredentialDto) {
    const { username } =
      await this.authRepository.createUser(authCredentialDto);

    //   generate token
    const payload: JwtPayload = { username };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
