import { EntityAdapter, EntityState } from '@ngrx/entity';
import { MemoizedSelector, createSelector } from '@ngrx/store';

export const getEntitiesSelectors = <T>(
  adapter: EntityAdapter<T>,
  state: MemoizedSelector<object, EntityState<T>>
) => {
  const { selectAll, selectEntities, selectIds, selectTotal } =
    adapter.getSelectors();
  const selectorEntities = createSelector(state, selectEntities);

  return {
    getOne: (id: number) =>
      createSelector(selectorEntities, (entities) => entities[id]),
    getMany: (ids: number[]) =>
      createSelector(
        selectorEntities,
        (entities) =>
          ids.map((id) => entities[id]).filter((item) => !!item) as T[]
      ),
    getAll: createSelector(state, selectAll),
    getIds: createSelector(state, selectIds),
    getTotal: createSelector(state, selectTotal),
  };
};
