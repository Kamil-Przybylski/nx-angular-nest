import { Actions, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { IData } from '../store-utils.models';
import { CallStatusActionGroup } from './call.status.models';

export abstract class StoreUtilsEffects<T extends IData> {
  constructor(
    protected readonly actions$: Actions,
    private readonly callStatusActions: CallStatusActionGroup<T>
  ) {}
}
