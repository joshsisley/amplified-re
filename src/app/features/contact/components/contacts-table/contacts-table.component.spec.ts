import { CommonModule } from '@angular/common';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Contact } from 'src/app/API.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContactsTableComponent } from './contacts-table.component';

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule, BrowserAnimationsModule],
      declarations: [ ContactsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getContactSubtype', () => {
    it('should return empty subtype if no subtype', () => {
      const contact: Partial<Contact> = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        subtype: '',
        otherDesc: ''
      };
      expect(component.getContactSubtype(contact)).toBe('');
    });
    
    it('should return other subtype if subtype is other', () => {
      const contact: Partial<Contact> = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        subtype: 'other',
        otherDesc: 'other desc'
      };
      expect(component.getContactSubtype(contact)).toBe('other desc');
    });

    it('should return correctly formatted subtype if subtype is not other', () => {
      const contact: Partial<Contact> = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        subtype: 'real-estate-agent',
        otherDesc: ''
      };
      expect(component.getContactSubtype(contact)).toBe('Real Estate Agent');
    });
  });
});
