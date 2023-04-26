import { EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { EntitiesActionGroup } from './entities.model';

export const getEntitiesReducer = <T>(
  actions: EntitiesActionGroup<T>,
  adapter: EntityAdapter<T>
) => {
  return createReducer(
    adapter.getInitialState(),
    on(actions.addOne, (state, { entity }) => adapter.addOne(entity, state)),
    on(actions.addMany, (state, { entities }) =>
      adapter.addMany(entities, state)
    ),
    on(actions.addAll, (state, { entities }) =>
      adapter.addMany(entities, state)
    ),

    on(actions.removeOne, (state, { id }) => adapter.removeOne(id, state)),
    on(actions.removeMany, (state, { ids }) => adapter.removeMany(ids, state)),
    on(actions.removeAll, (state) => adapter.removeAll(state)),

    on(actions.updateOne, (state, { entity }) =>
      adapter.updateOne(entity, state)
    ),
    on(actions.updateMany, (state, { entities }) =>
      adapter.updateMany(entities, state)
    ),

    on(actions.upsertOne, (state, { entity }) =>
      adapter.upsertOne(entity, state)
    ),
    on(actions.upsertMany, (state, { entities }) =>
      adapter.upsertMany(entities, state)
    )
  );
};
