import { ActionCreatorProps } from '@ngrx/store';
import { ActionGroup } from '@ngrx/store/src/action_group_creator_models';
import { IData } from '../store-utils.models';

export enum LoadingStateEnum {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface ErrorState {
  errorMessage: string;
}

export type CallState = LoadingStateEnum | ErrorState;

export enum CallStatusActionsEnum {
  FETCH_ONE = 'Fetch One',
  FETCH_ONE_SUCCESS = 'Fetch One Success',
  FETCH_ONE_ERROR = 'Fetch One Error',

  FETCH_MANY = 'Fetch Many',
  FETCH_MANY_SUCCESS = 'Fetch Many Success',
  FETCH_MANY_ERROR = 'Fetch Many Error',
}

export type CallStatusActionGroup<T extends IData> = ActionGroup<
  string,
  {
    [CallStatusActionsEnum.FETCH_ONE]: ActionCreatorProps<void>;
    [CallStatusActionsEnum.FETCH_ONE_SUCCESS]: ActionCreatorProps<{
      data: T;
    }>;
    [CallStatusActionsEnum.FETCH_ONE_ERROR]: ActionCreatorProps<{
      errorMessage: string;
    }>;

    [CallStatusActionsEnum.FETCH_MANY]: ActionCreatorProps<void>;
    [CallStatusActionsEnum.FETCH_MANY_SUCCESS]: ActionCreatorProps<{
      data: T[];
    }>;
    [CallStatusActionsEnum.FETCH_MANY_ERROR]: ActionCreatorProps<{
      errorMessage: string;
    }>;
  }
>;
