import { Actions, ofType } from '@ngrx/effects';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { IData } from './store-utils.models';
import { CallStatusActionGroup } from './call-status/call.status.models';
import { EntitiesActionGroup } from './entities/entities.model';
import { TypedAction } from '@ngrx/store/src/models';

export abstract class StoreUtilsEffects<T extends IData> {
  constructor(
    protected readonly actions$: Actions,
    private readonly callStatusActions: CallStatusActionGroup<T>,
    private readonly entitiesActions: EntitiesActionGroup<T>
  ) {}

  protected fetchOneData(getData$: Observable<T>) {
    return this.actions$.pipe(
      ofType(this.callStatusActions.fetchOne),
      switchMap(() =>
        getData$.pipe(
          map((data) => this.callStatusActions.fetchOneSuccess({ data })),
          catchError(() =>
            of(
              this.callStatusActions.fetchOneError({
                errorMessage: 'Error Fetching Products',
              })
            )
          )
        )
      )
    );
  }

  protected fetchManyData(getData$: Observable<T[]>) {
    return this.actions$.pipe(
      ofType(this.callStatusActions.fetchMany),
      switchMap(() =>
        getData$.pipe(
          map((data) => this.callStatusActions.fetchManySuccess({ data })),
          catchError(() =>
            of(
              this.callStatusActions.fetchManyError({
                errorMessage: 'Error Fetching Products',
              })
            )
          )
        )
      )
    );
  }

  protected saveOneData(fn: (data: T) => TypedAction<string>) {
    return this.actions$.pipe(
      ofType(this.callStatusActions.fetchOneSuccess),
      map(({ data }) => fn(data))
    );
  }

  protected saveEntitiesData() {
    return this.actions$.pipe(
      ofType(this.callStatusActions.fetchManySuccess),
      map(({ data }) => this.entitiesActions.addAll({ entities: data }))
    );
  }
}
