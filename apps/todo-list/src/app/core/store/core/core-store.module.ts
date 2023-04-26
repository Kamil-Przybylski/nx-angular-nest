import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CORE_FEATURE_KEY, coreReducer } from './core.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(CORE_FEATURE_KEY, coreReducer),
    EffectsModule.forFeature([]),
  ],
})
export class CoreStoreModule {}
