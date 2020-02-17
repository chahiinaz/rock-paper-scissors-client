import axios from "axios";

export const USER_CREATED = "USER_CREATED";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const baseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.post(`${baseUrl}/signup`, {
        username: username,
        email: email,
        password: password
      });
      // console.log("what is my response?", response);

      if (response.status === 201) {
        dispatch(signUpSuccess());
      }
    } catch (error) {
      throw error;
    }
  };
}

function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token: token }
  };
}
export function login(email, password) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password
      });
      console.log("what is my response?", response);

      if (response.status === 201) {
        dispatch(loginSuccess(response.data.token));
      }
    } catch (error) {
      throw error;
    }
  };
}
