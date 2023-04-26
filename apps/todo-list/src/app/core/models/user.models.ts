import { IData } from '@libs/store-utils';

export interface IUser extends IData {
  username: string;
  email: string;
  isActive: boolean;
}
