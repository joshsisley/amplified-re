import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { contactFeatureKey, reducer } from './store/contact.reducer';
import { ContactEffects } from './store/contact.effects';
import { ContactService } from './contact.service';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';


@NgModule({
  declarations: [
    ContactListComponent,
    ContactsTableComponent,
    AddContactFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    StoreModule.forFeature(contactFeatureKey, reducer),
    EffectsModule.forFeature([ContactEffects])
  ],
  providers: [ContactService],
})
export class ContactModule { }
