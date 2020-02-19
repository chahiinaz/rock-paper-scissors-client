import axios from "./../axios";

export const createRoom = name => {
  return (dispatch, getState) => {
    const jwt = getState().auth.data.token;
    axios
      .post(
        `http://localhost:4000/gameroom`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      )
      .then(resp => console.log(resp))
      .catch(error => console.error(error));
  };
};

export const joinRoom = gameroomId => {
  return (dispatch, getState) => {
    const jwt = getState().auth.data.token;
    axios
      .put(
        `http://localhost:4000/join`,
        { gameroomId },
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      )
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };
};
