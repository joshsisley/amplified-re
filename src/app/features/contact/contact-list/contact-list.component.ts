import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { fromAuth } from '../../../auth/store/auth.selectors';
import { AuthActions } from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  currentUser$: Observable<any> = this.store.pipe(select(fromAuth.selectCurrentUser))
  userLoaded$: Observable<any> = this.store.pipe(select(fromAuth.selectUserLoaded))

  constructor(private store: Store) {
    this.store.dispatch(AuthActions.loadUser())
  }

  ngOnInit(): void {}

  handleSignOut() {
    this.store.dispatch(AuthActions.signOutUser())
  }

}
