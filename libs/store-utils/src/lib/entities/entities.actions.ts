import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EntitiesActionGroup, EntitiesActionsEnum } from './entities.model';
import { Update } from '@ngrx/entity';
import { IData } from '../store-utils.models';

type Source = 'source must be a string literal type';

export const getEntitiesActions = <T extends IData>(
  actionGroupName: string
): EntitiesActionGroup<T> => {
  return createActionGroup({
    source: `Entities ${actionGroupName}` as Source,
    events: {
      [EntitiesActionsEnum.ADD_ONE]: props<{ entity: T }>(),
      [EntitiesActionsEnum.ADD_MANY]: props<{ entities: T[] }>(),
      [EntitiesActionsEnum.ADD_ALL]: props<{ entities: T[] }>(),

      [EntitiesActionsEnum.REMOVE_ONE]: props<{ id: number }>(),
      [EntitiesActionsEnum.REMOVE_MANY]: props<{ ids: number[] }>(),
      [EntitiesActionsEnum.REMOVE_ALL]: emptyProps(),

      [EntitiesActionsEnum.UPDATE_ONE]: props<{
        id: number;
        entity: Update<T>;
      }>(),
      [EntitiesActionsEnum.UPDATE_MANY]: props<{
        ids: number[];
        entities: Update<T>[];
      }>(),

      [EntitiesActionsEnum.UPSERT_ONE]: props<{ entity: T }>(),
      [EntitiesActionsEnum.UPSERT_MANY]: props<{ entities: T[] }>(),
    },
  });
};
