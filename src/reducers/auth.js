import { USER_CREATED, LOGIN_SUCCESS } from "../actions/auth";

export default (state = { userCreated: false, token: null }, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
