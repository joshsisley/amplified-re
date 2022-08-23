import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { ActionHeaderComponent } from './action-header/action-header.component';
import { DrawerComponent } from './drawer/drawer.component';

const MATERIAL_MODULES = [
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [...MATERIAL_MODULES],
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [...MATERIAL_MODULES],
    HeaderComponent,
    ActionHeaderComponent,
    DrawerComponent,
  ],
  declarations: [
    HeaderComponent,
    ActionHeaderComponent,
    DrawerComponent,
  ],
  providers: [],
})
export class SharedModule { }
