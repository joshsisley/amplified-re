import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Injectable()
export class ContactService {
  constructor(private apiService: APIService) {}

  listContacts = async () => {
    return await this.apiService.ListContacts().then(res => res.items).catch(err => err);
  }

  addContact = async (contact: any) => {
    return await this.apiService.CreateContact(contact).then(res => res).catch(err => err);
  }
  
}