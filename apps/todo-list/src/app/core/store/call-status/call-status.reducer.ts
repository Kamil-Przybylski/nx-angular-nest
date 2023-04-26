import { ActionReducer, combineReducers, createReducer } from '@ngrx/store';
import { EntitiesEnum } from '../entities/entities.models';
import {
  CallState,
  CallStatusReducerFactoryTypes,
  CallStatusState,
  ErrorState,
  ICallStatusState,
  IHttpState,
  LoadingStateEnum,
} from './call-status.models';
import * as _ from 'lodash';

export function getCallStateError(callState: CallState): string | null {
  if ((callState as ErrorState).errorMessage !== undefined) {
    return (callState as ErrorState).errorMessage;
  }
  return null;
}

export const initialState: IHttpState = {
  entityIds: [],
  callState: LoadingStateEnum.INIT,
};

const getCallStatusState = (
  state: ICallStatusState,
  dataId: number,
  fn: (st: IHttpState) => IHttpState
) => {
  if (state[dataId]) {
    const newState = _.assign({}, state);
    newState[dataId] = fn(newState[dataId]);
    return newState;
  } else {
    const newState = _.assign({}, state, {
      [dataId]: { ...initialState },
    });
    newState[dataId] = fn(newState[dataId]);
    return newState;
  }
};

const createDataReducer = (
  type: EntitiesEnum
): ActionReducer<ICallStatusState> => {
  return createReducer({});
};

export const getCallStatusReducer = () => {
  const reducerFactory: CallStatusReducerFactoryTypes = {};
  _.forEach(EntitiesEnum, (key) => {
    reducerFactory[key] = createDataReducer(key);
  });
  return combineReducers(reducerFactory);
};
