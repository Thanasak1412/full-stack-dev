import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import {
  configValidationAppSchema,
  configValidationDbSchema,
} from './config/config.schema';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';

import { User } from './auth/user.entity';
import { Post } from './post/post.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: configValidationAppSchema,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          validationSchema: configValidationDbSchema,
        }),
      ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'postgres'>('database.type'),
        host: configService.get('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        synchronize: configService.get<boolean>('database.synchronize'),
        autoLoadEntities: configService.get<boolean>(
          'database.autoLoadEntities',
        ),
        entities: [User, Post],
      }),
    }),
    AuthModule,
    PostModule,
  ],
})
export class AppModule {}
