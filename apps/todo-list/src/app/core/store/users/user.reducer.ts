import { combineReducers } from '@ngrx/store';
import { IUser } from '../../models/user.models';
import {
  CallStatusState,
  getCallStatusReducer,
  getEntitiesReducer,
} from '@libs/store-utils';
import { userEntitiesActions, userCallStateActions } from './user.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface UserState {
  entities: EntityState<IUser>;
  callStatus: CallStatusState;
}

export const userAdapter = createEntityAdapter<IUser>();

export const userReducer = combineReducers<UserState>({
  entities: getEntitiesReducer(userEntitiesActions, userAdapter),
  callStatus: getCallStatusReducer(userCallStateActions),
});
