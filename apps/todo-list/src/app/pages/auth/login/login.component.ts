import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '@libs/ng-material';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import userActions from '../../../core/store/users';
import { Store } from '@ngrx/store';
import userSelectors from '../../../core/store/users/user.selectors';

@Component({
  selector: 'nx-angular-nest-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgMaterialModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  allUsers$ = this.store.select(userSelectors.getAll);
  oneUser$ = this.store.select(userSelectors.getOne(1));
  manyUsers$ = this.store.select(userSelectors.getMany([1, 3]));

  constructor(private readonly fb: FormBuilder, private readonly store: Store) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.store.dispatch(userActions.getUser({ id: 1 }));
    this.store.dispatch(userActions.getUsers());
  }
}
