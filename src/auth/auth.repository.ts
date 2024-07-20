import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { InjectRepository } from '@nestjs/typeorm';

Injectable();
export class AuthRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ username: string }> {
    const { username } = authCredentialDto;

    try {
      const find = await this.usersRepository.findOne({ where: { username } });

      let user: User = null;
      // if the user is not exist
      // to create the user with username
      if (!find) {
        const createUser = this.usersRepository.create({
          username,
        });

        user = await this.usersRepository.save(createUser);
      }

      return { username: find.username ?? user.username };
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
