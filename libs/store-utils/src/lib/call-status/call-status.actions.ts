import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  CallStatusActionGroup,
  CallStatusActionsEnum,
} from './call.status.models';
import { IData } from '../store-utils.models';

type Source = 'source must be a string literal type';

export const getCallStatusActions = <T extends IData>(
  actionGroupName: string
): CallStatusActionGroup<T> => {
  return createActionGroup({
    source: `Call Status ${actionGroupName}` as Source,
    events: {
      [CallStatusActionsEnum.FETCH_ONE]: emptyProps(),
      [CallStatusActionsEnum.FETCH_ONE_SUCCESS]: props<{ data: T }>(),
      [CallStatusActionsEnum.FETCH_ONE_ERROR]: props<{
        errorMessage: string;
      }>(),

      [CallStatusActionsEnum.FETCH_MANY]: emptyProps(),
      [CallStatusActionsEnum.FETCH_MANY_SUCCESS]: props<{ data: T[] }>(),
      [CallStatusActionsEnum.FETCH_MANY_ERROR]: props<{
        errorMessage: string;
      }>(),
    },
  });
};
