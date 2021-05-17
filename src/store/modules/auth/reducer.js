const INITIAL_STATE = {
  token: null,
  user: null,
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_REQUEST':
      return { ...state, loading: true };

    case '@auth/SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };

    case '@auth/SIGNIN_ERROR':
      return { ...state, loading: false };

    case '@auth/SIGNOUT_REQUEST':
      return { ...INITIAL_STATE };

    default:
      return { ...state };
  }
}
