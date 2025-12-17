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

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return 'All Users';
  }

  // users/search?name=Marat&age=23
  @Get('search')
  getUserByQuery(@Query('name') name: string, @Query('age') age: string) {
    return `User with name: ${name} and age: ${age}`;
  }

  // users/1
  @Get(':id')
  getUserById(@Param('id') id: string) {
    if (!Number(id)) throw new NotFoundException('not valid id');
    return `User with id: ${id}`;
  }

  @Post()
  createUser(@Body() body: any) {
    if (!body) throw new NotFoundException('body required');

    return {
      message: 'User created',
      code: 201,
      data: body,
    };
  }

  @Put(':id')
  updateUser() {
    return 'Update user';
  }

  @Delete(':id')
  deleteUser() {
    return 'Delete user';
  }
}
