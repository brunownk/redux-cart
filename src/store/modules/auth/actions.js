export const signInRequest = (credentials) => {
  return {
    type: '@auth/SIGNIN_REQUEST',
    data: credentials,
  };
};

export const signInSuccess = (user) => {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: user,
  };
};

export const signInError = () => {
  return {
    type: '@auth/SIGNIN_ERROR',
  };
};

export const signOutRequest = () => {
  return {
    type: '@auth/SIGNOUT_REQUEST',
  };
};
