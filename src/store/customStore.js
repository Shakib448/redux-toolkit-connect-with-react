import { reducer } from "../reducer/reducer";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    //   Call the reducer to get the new state
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  };

  return { getState, dispatch, subscribe };
};

export default createStore(reducer);
