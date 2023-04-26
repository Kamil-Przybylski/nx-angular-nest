import { getCallStatusActions, getEntitiesActions } from '@libs/store-utils';
import { IUser } from '../../models/user.models';
import { createAction, props } from '@ngrx/store';

const ACTION = 'Users';
const getActionName = (name: string) => `[${ACTION}] ${name}`;

export const userEntitiesActions = getEntitiesActions<IUser>(ACTION);
export const userCallStateActions = getCallStatusActions<IUser>(ACTION);

export const getUser = createAction(
  getActionName('Get User'),
  props<{ id: number }>()
);
export const getUsers = createAction(getActionName('Get Users'));
