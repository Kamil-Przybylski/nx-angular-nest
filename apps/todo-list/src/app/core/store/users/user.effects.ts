import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IUser } from '../../models/user.models';
import { userCallStateActions, userEntitiesActions } from './user.actions';
import { StoreUtilsEffects } from '@libs/store-utils';
import { AuthService } from '../../services/auth.service';
import userActions from './';
import { map } from 'rxjs';

@Injectable()
export class UserEffects extends StoreUtilsEffects<IUser> {
  constructor(actions$: Actions, private readonly authService: AuthService) {
    super(actions$, userCallStateActions, userEntitiesActions);
  }

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUser),
      map(({ id }) => this.authService.getOne(id) as any)
    )
  );

  fetchData$ = createEffect(() =>
    this.fetchManyData(this.authService.getUsers())
  );
  saveData$ = createEffect(() => this.saveEntitiesData());
}
