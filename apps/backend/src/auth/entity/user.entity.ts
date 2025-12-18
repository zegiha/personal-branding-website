import { Expose } from 'class-transformer';

class UserEntity {
  @Expose()
  email: string;
  @Expose()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

export class AuthEntity extends UserEntity {}