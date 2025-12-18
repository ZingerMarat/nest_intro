import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  getAllUsers(): { id: number; name: string }[] {
    return this.UsersService.getAllUsers();
  }

  // users/search?name=Marat&age=23
  // @Get('search')
  // getUserByQuery(@Query('name') name: string, @Query('age') age: string) {
  //   return `User with name: ${name} and age: ${age}`;
  // }

  // // users/1
  @Get(':id')
  getUserById(@Param('id') id: string): { id: number; name: string } {
    return this.UsersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() body: any): { id: number; name: string } {
    return this.UsersService.createUser(body.name);
  }

  // @Put(':id')
  // updateUser() {
  //   return 'Update user';
  // }

  // @Delete(':id')
  // deleteUser() {
  //   return 'Delete user';
  // }
}
