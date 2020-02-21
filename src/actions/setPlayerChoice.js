import axios from "./../axios";

export const setPlayerChoice = (choice, playerId, gameRoomId) => {
  return (dispatch, getState) => {
    const jwt = getState().auth.data.token;

    axios
      .put(
        `http://localhost:4000/player/${choice}`,
        { choice, playerId, gameRoomId },
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
