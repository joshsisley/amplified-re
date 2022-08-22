import { AuthAppState } from "./auth.reducer";
import { fromAuth } from "./auth.selectors";

describe('selectCurrentUser', () => {
  const state = {
    user: {
      attributes: {
        email: '',
      },
    },
    userLoaded: true,
  }
  it('should return the current user', () => {
    expect(fromAuth.selectCurrentUser.projector(state)).toEqual(state.user);
  });
});