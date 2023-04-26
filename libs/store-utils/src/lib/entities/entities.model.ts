import { Update } from '@ngrx/entity';
import { ActionCreatorProps } from '@ngrx/store';
import { ActionGroup } from '@ngrx/store/src/action_group_creator_models';

export enum EntitiesActionsEnum {
  ADD_ONE = 'Add One',
  ADD_MANY = 'Add Many',
  ADD_ALL = 'Add All',

  REMOVE_ONE = 'Remove One',
  REMOVE_MANY = 'Remove Many',
  REMOVE_ALL = 'Remove All',

  UPDATE_ONE = 'Update One',
  UPDATE_MANY = 'Update Many',

  UPSERT_ONE = 'Upsert One',
  UPSERT_MANY = 'Upsert Many',
}

export type EntitiesActionGroup<T> = ActionGroup<
  string,
  {
    [EntitiesActionsEnum.ADD_ONE]: ActionCreatorProps<{
      entity: T;
    }>;
    [EntitiesActionsEnum.ADD_MANY]: ActionCreatorProps<{
      entities: T[];
    }>;
    [EntitiesActionsEnum.ADD_ALL]: ActionCreatorProps<{
      entities: T[];
    }>;

    [EntitiesActionsEnum.REMOVE_ONE]: ActionCreatorProps<{
      id: number;
    }>;
    [EntitiesActionsEnum.REMOVE_MANY]: ActionCreatorProps<{
      ids: number[];
    }>;
    [EntitiesActionsEnum.REMOVE_ALL]: ActionCreatorProps<void>;

    [EntitiesActionsEnum.UPDATE_ONE]: ActionCreatorProps<{
      id: number;
      entity: Update<T>;
    }>;
    [EntitiesActionsEnum.UPDATE_MANY]: ActionCreatorProps<{
      ids: number[];
      entities: Update<T>[];
    }>;

    [EntitiesActionsEnum.UPSERT_ONE]: ActionCreatorProps<{
      entity: T;
    }>;
    [EntitiesActionsEnum.UPSERT_MANY]: ActionCreatorProps<{
      entities: T[];
    }>;
  }
>;
