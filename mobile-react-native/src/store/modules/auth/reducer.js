import produce from 'immer';

import { Types as TypesAuth } from './actions';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  email: null,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case TypesAuth.SIGN_IN_SET_EMAIL: {
        draft.email = action.payload.email;
        break;
      }

      case TypesAuth.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case TypesAuth.SIGN_IN_SUCCESS: {
        draft.user = action.payload.data.login;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case TypesAuth.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      case TypesAuth.SIGN_OUT: {
        draft.user = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
