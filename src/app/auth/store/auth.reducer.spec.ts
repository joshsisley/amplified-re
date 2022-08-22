import { AuthActions } from "./auth.actions";
import { reducer } from "./auth.reducer";


describe('PrescriberReducer', () => {
  it('should update store on fetchPrescriberByNpiAndYearSuccess', () => {
    const user = {
      attributes: {
        email: ''
      }
    }
    const state = reducer({} as any, AuthActions.loadUserSuccess({ user }));
    expect(state).toEqual({ user, userLoaded: true });
  });
});