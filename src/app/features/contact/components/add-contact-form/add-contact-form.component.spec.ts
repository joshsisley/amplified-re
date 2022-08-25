import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from 'src/app/API.service';
import { ICreateContact } from 'src/app/core/model/contact';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddContactFormComponent } from './add-contact-form.component';

describe('AddContactFormComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ AddContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#submit', () => {
    it('should emit the form value', () => {
      const value: ICreateContact = {
        firstName: 'John',
        lastName: 'Doe',
        email: '',
        phone: '',
        type: '',
        subtype: '',
        otherDesc: ''
      };
      component.contactForm.setValue(value);
      spyOn(component.onSubmit, 'emit');
      component.submit();
      expect(component.onSubmit.emit).toHaveBeenCalledWith(value);
    });
  })

  describe('#cancel', () => {
    it('should emit the onCancel event', () => {
      spyOn(component.onCancel, 'emit');
      component.cancel();
      expect(component.onCancel.emit).toHaveBeenCalled();
    });
  });
});
