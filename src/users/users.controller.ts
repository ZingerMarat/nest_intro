import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
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
}
