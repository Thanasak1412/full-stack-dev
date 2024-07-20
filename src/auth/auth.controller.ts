import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';

import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() authCredential: AuthCredentialDto) {
    return this.authService.signIn(authCredential);
  }
}
