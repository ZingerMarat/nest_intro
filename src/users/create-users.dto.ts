import { IsString, MinLength, IsNumber } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'name must be a string' })
  @MinLength(3, { message: 'must be min 3 chars' })
  name: string;

  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'age must be a number' },
  )
  age: number;

  @IsString({ message: 'bio must be a string' })
  @MinLength(5, { message: 'must be min 5 chars' })
  bio: string;
}
