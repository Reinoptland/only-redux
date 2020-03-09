// reducer.js
const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "REPLACE":
      return action.payload;
    case "MULTIPLY":
      return state * state;
    default:
      return state;
  }
}
module.exports = { reducer };
