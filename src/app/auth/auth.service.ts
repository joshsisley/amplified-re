import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthService {
  constructor() { }

  getCurrentUser = async () => {
    return await Auth.currentUserInfo();
  }

  signOut = async () => {
    return await Auth.signOut();
  }
}