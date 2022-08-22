import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/shared/shared.module';

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
      declarations: [ ContactListComponent ]
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
