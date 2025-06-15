import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '@/dto/user.dto';
import { User } from '@/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
  async createUser(createUserDto: CreateUserDto):  Promise<User> {
    const { email, password } = createUserDto;

    const existingUser = await this.userRepository.findOne({
      where: { email }
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = new User();
    user.email = email;
    user.password = password;



    return this.userRepository.save(user);
  }
}