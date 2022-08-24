import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Contact } from 'src/app/API.service';
import { CONTACT_TYPES, SUBTYPES } from '../../contact.constant';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTableComponent implements OnInit, OnChanges {
  @Input() contacts: Contact[] = [];
  @Output() openContact = new EventEmitter();
  displayedColumns: string[] = ['name', 'email', 'phone', 'type', 'subtype', 'jobTitle'];
  contactTypes = CONTACT_TYPES;
  dataSource: MatTableDataSource<Contact> = new MatTableDataSource(this.contacts);;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: any) {
    if (changes.contacts) {
      this.dataSource.data = this.contacts;
      this.dataSource.sort = this.sort;
    }
  }

  getContactSubtype(contact: Contact) {
    if (!contact.subtype) {
      return '';
    }
    if (contact.subtype === 'other') {
      return contact.otherDesc;
    }
    return SUBTYPES[contact.subtype];
  }

}
