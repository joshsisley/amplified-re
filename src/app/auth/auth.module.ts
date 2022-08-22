import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';
import { AuthEffects } from './store/auth.effects';
import { authFeatureKey, reducer } from './store/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [],
  declarations: [],
  providers: [AuthService],
})
export class AuthModule { }
