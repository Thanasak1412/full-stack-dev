import { ConfigService, ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('auth.jwtSecret'),
        signOptions: {
          expiresIn: configService.get<number>('auth.jwtExpired'),
        },
      }),
    }),
  ],
  providers: [AuthService, AuthRepository],
  controllers: [AuthController],
  exports: [PassportModule],
})
export class AuthModule {}
