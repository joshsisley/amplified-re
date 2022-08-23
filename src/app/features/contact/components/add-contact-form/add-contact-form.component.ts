import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ISelectOption } from 'src/app/core/model/select-option';
import { LEAD_TYPES, PROFESSIONAL_TYPES_LIST } from '../../contact.constant';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddContactFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter<void>();

  destroyed$ = new Subject();
  subtypeOptions: ISelectOption[] = [];
  contactForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phone: [''],
    type: [''],
    subtype: [''],
    otherDesc: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm.controls["type"].valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      this.contactForm.controls["subtype"].reset();
      if (value === 'professional') {
        this.subtypeOptions = PROFESSIONAL_TYPES_LIST;
      } else if (value === 'lead') {
        this.subtypeOptions = LEAD_TYPES;
      } else {
        this.subtypeOptions = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.contactForm.reset();
  }

  cancel() {
    this.onCancel.emit();
  }

  submit() {
    this.onSubmit.emit(this.contactForm.value);
  }

}
