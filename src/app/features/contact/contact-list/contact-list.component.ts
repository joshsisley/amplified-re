import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { fromAuth } from '../../../auth/store/auth.selectors';
import { AuthActions } from '../../../auth/store/auth.actions';
import { fromContact } from '../store/contact.selectors';
import { ContactActions } from '../store/contact.actions';
import { IHeaderAction } from 'src/app/core/model/header-action';
import { MatDialog } from '@angular/material/dialog';
import { ICreateContact } from 'src/app/core/model/contact';
import { Contact } from 'src/app/API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnInit {
  currentUser$: Observable<any> = this.store.pipe(select(fromAuth.selectCurrentUser))
  userLoaded$: Observable<any> = this.store.pipe(select(fromAuth.selectUserLoaded))
  contacts$: Observable<any> = this.store.pipe(select(fromContact.selectAll))
  drawerOpen: boolean = false;

  headerActions: IHeaderAction[] = [
    {
      type: 'primary',
      label: 'Add Contact',
      onClick: () => {
        this.drawerOpen = true;
      }
    }
  ]

  constructor(private store: Store, public dialog: MatDialog, private router: Router) {
    this.store.dispatch(AuthActions.loadUser());
    this.store.dispatch(ContactActions.load());
  }

  ngOnInit(): void {}

  handleSignOut() {
    this.store.dispatch(AuthActions.signOutUser())
  }

  handleCancel() {
    this.drawerOpen = false;
  }

  handleSubmit(contact: Contact) {
    this.store.dispatch(ContactActions.add({ contact }));
    this.drawerOpen = false;
  }

  handleOpenContact(id: string) {
    this.router.navigate(['/contacts', id]);
  }

}
