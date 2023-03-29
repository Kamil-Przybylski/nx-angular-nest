import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  login(data: any) {
    console.log(data);
  }
}
