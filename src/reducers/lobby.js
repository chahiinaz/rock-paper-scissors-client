export default function reducer(state = [], action = {}) {
  // console.log("REDUX", action);
  switch (action.type) {
    case "ALL_GAMEROOMS":
      return action.payload;
    case "NEW_GAMEROOM":
      return [...state, action.payload];
    case "ONE_GAMEROOM":
      return [action.payload];
    default:
      return state;
  }
}
