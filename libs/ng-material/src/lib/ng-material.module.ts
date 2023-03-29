import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const UI_MODULES = [MatInputModule, MatCardModule, MatButtonModule];

@NgModule({
  imports: [CommonModule, ...UI_MODULES],
  exports: UI_MODULES,
})
export class NgMaterialModule {}
