import { of } from "rxjs";

export class AuthServiceStub {
  getCurrentUser() {
    return of({
      attributes: {
        email: ''
      }
    });
  }
  signOut() {
    return of();
  }
}