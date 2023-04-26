import { combineReducers, createFeatureSelector } from '@ngrx/store';
import { AuthState, authReducer } from '../auth/auth.reducer';
import { UserState, userReducer } from '../users/user.reducer';

export const CORE_FEATURE_KEY = 'core';

export interface CoreState {
  auth: AuthState;
  users: UserState;
}

export const coreReducer = combineReducers<CoreState>({
  auth: authReducer,
  users: userReducer,
});

export const getCoreModuleState =
  createFeatureSelector<CoreState>(CORE_FEATURE_KEY);
