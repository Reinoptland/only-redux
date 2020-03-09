// store.js
const redux = require("redux");
const { reducer } = require("./reducer");
const store = redux.createStore(reducer);
// console.log("WHAT IS STORE", store);
const action = {
  type: "ADD",
  payload: 3
};

console.log("Initial state of the store:", store.getState());

store.dispatch(action);

console.log("Store after action was dispatched", store.getState());

store.dispatch({
  type: "SUBTRACT",
  payload: 3
});

console.log("Store after action was dispatched", store.getState());
