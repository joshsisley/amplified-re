import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsTableComponent } from '../components/contacts-table/contacts-table.component';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  const initialState = {
    contacts: [],
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [],
      imports: [SharedModule],
      providers: [
        provideMockStore({ initialState }),
      ],
      declarations: [ ContactListComponent, MockComponent(ContactsTableComponent) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
