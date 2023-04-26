import { createReducer, on } from '@ngrx/store';
import {
  CallState,
  CallStatusActionGroup,
  LoadingStateEnum,
} from './call.status.models';
import { IData } from '../store-utils.models';

export interface CallStatusState {
  id?: number;
  entityIds: number[];
  callState: CallState;
}

export const initialState: CallStatusState = {
  entityIds: [],
  callState: LoadingStateEnum.INIT,
};

export const getCallStatusReducer = <T extends IData>(
  actions: CallStatusActionGroup<T>
) => {
  return createReducer(
    initialState,
    on(actions.fetchMany, (state) => ({
      ...state,
      entityIds: [],
      callState: LoadingStateEnum.LOADING,
    })),
    on(actions.fetchManySuccess, (state, { data }) => ({
      ...state,
      entityIds: data.map((item) => item.id),
      callState: LoadingStateEnum.LOADED,
    })),
    on(actions.fetchManyError, (state, { errorMessage }) => ({
      ...state,
      entityIds: [],
      callState: { errorMessage },
    }))
  );
};
