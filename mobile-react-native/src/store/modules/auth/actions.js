export const Types = {
  SIGN_IN_SET_EMAIL: '@auth/SIGN_IN_SET_EMAIL',
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
};

export function setEmail(email) {
  return {
    type: Types.SIGN_IN_SET_EMAIL,
    payload: { email },
  };
}

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_IN_REQUEST,
    payload: { password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: Types.SIGN_FAILURE,
    payload: {},
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT,
    payload: {},
  };
}
