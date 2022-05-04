import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

/* welcome this file is just exporting the store and instead of the traditional createStore and combineReducer, redux
  toolkit just gives us this one method to create store with a lot of reducers.

  remember how we also needed redux thunk for the async actions and manually put that in the store,, WELL NOW WE DONT cuz its built in already.

  to put it simply redux toolkit is awesome.
 */

export default configureStore({ reducer: { count: counterReducer } });

/*
 I know what ur thinking. its pretty crazy using redux for just some counter hahaha but whatever its for demonstration.
*/
