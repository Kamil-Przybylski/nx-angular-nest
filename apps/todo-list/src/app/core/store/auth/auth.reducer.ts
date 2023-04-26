import { createReducer } from '@ngrx/store';
import { IUser } from '../../models/user.models';

export interface AuthState {
  token: string | null;
  userData: IUser | null;
}

const initialState: AuthState = {
  token: null,
  userData: null,
};

export const authReducer = createReducer(initialState);
