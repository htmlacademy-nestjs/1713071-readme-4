export interface IUser {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  registrationDate: Date;
  avatar: string;
  passwordHash: string;
}
