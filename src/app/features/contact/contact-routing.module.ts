import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: ':id',
    component: ContactProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
