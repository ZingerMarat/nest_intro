import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './create-users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Zinger', age: 31, bio: 'Some info' },
    { id: 2, name: 'Rodina', age: 31, bio: 'Some info' },
  ];

  getAllUsers(): CreateUserDTO[] {
    return this.users;
  }

  getUserById(id: number): CreateUserDTO {
    const user = this.users.find((u) => id === u.id);

    if (!user) throw new NotFoundException('User with id not found');

    return user;
  }

  createUser(body: CreateUserDTO): CreateUserDTO {
    const newUser = {
      id: this.users.length + 1,
      name: body.name,
      age: body.age,
      bio: body.bio,
    };

    this.users.push(newUser);

    return newUser;
  }
}
