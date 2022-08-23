import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/API.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTableComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'type', 'subtype', 'jobTitle'];

  constructor() { }

  ngOnInit(): void {
   
  }

}
