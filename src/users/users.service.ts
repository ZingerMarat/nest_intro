import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Zinger' },
    { id: 2, name: 'Rodina' },
  ];

  getAllUsers(): { id: number; name: string }[] {
    return this.users;
  }

  getUserById(id: number): { id: number; name: string } {
    const user = this.users.find((u) => id === u.id);

    if (!user) throw new NotFoundException('User with id not found');

    return user;
  }

  createUser(name: string): { id: number; name: string } {
    const newUser = {
      id: this.users.length + 1,
      name,
    };

    this.users.push(newUser);

    return newUser;
  }
}
