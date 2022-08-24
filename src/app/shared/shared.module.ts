import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';

import { ActionHeaderComponent } from './action-header/action-header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NgxMaskModule } from 'ngx-mask';

const MATERIAL_MODULES = [
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatSortModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    [...MATERIAL_MODULES],
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
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
