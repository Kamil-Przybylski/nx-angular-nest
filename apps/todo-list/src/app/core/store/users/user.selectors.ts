import { createSelector } from '@ngrx/store';
import { getCoreModuleState } from '../core/core.reducer';
import { userAdapter } from './user.reducer';
import { getEntitiesSelectors } from '@libs/store-utils';

const getState = createSelector(getCoreModuleState, (state) => state.users);

const getEntitiesState = createSelector(getState, (state) => state.entities);

const { getAll, getOne, getMany, getIds, getTotal } = getEntitiesSelectors(
  userAdapter,
  getEntitiesState
);

export default {
  getState,
  getAll,
  getOne,
  getMany,
  getIds,
  getTotal,
};
