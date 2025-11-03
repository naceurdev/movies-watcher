import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  userName: string;
  @IsString()
  password: string;
  @IsString()
  role: string;
}
