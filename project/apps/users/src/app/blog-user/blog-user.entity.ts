import { IUser } from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements IUser {
  public id?: string;
  public avatar?: string;
  public registrationDate?: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;

  constructor(blogUser: IUser) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      registrationDate: this.registrationDate,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    };
  }

  public fillEntity(blogUser: IUser) {
    this.id = blogUser.id;
    this.avatar = blogUser.avatar;
    this.registrationDate = blogUser.registrationDate;
    this.email = blogUser.email;
    this.firstname = blogUser.firstname;
    this.lastname = blogUser.lastname;
    this.passwordHash = blogUser.passwordHash;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
