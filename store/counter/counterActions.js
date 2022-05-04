/*
  here is how async actions would work, its pretty much the same thing like the old redux
  just take note of how the counterActions is used.
*/

import { counterActions } from "./counterSlice";

export const doSomethingAsync = () => async (dispatch) => {
  try {
    const fetchSomething = await fetch("something bla bla");
    dispatch(counterActions.increment());
  } catch (err) {
    console.log(err);
  }
};
