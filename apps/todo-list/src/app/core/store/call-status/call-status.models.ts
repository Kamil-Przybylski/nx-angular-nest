import { EntityAdapter, EntityState } from '@ngrx/entity';
import { EntitiesStateComponents } from '../entities/entities.models';
import { ActionReducer } from '@ngrx/store';

export enum LoadingStateEnum {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface ErrorState {
  errorMessage: string;
}

export type CallState = LoadingStateEnum | ErrorState;

export interface IHttpState {
  id?: number;
  entityIds: number[];
  callState: CallState;
}

export interface ICallStatusState {
  [id: number]: IHttpState;
}

export type CallStatusState = {
  [P in keyof EntitiesStateComponents]: ICallStatusState;
};

export interface AdaptersTypes {
  [type: string]: EntityAdapter<
    EntitiesStateComponents[keyof EntitiesStateComponents]
  >;
}

export interface CallStatusReducerFactoryTypes {
  [type: string]: ActionReducer<ICallStatusState>;
}
