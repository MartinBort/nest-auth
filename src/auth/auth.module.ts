import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service';
import { Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, Repository<User>],
})
export class AuthModule {} 
