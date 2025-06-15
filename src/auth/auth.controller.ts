import { Controller, Body, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service'
import { CreateUserDto } from '@/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async postAuth(@Body() createUserDto: CreateUserDto): Promise<object> {
    return await this.authService.createUser(createUserDto);
  }
}
