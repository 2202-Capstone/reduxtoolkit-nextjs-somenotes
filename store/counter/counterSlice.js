/*
  so whats happening here huh,, wheres all the reducers and action types and action creators... well in
  redux toolkit all that shiznit are all packed into one function which is the createSlice
*/

import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };

/*
  What we need to provide first is the:
    - name of slice
    - initial state (like how we also provided initial state in the old redux)

  the reducers is whats pretty interesting
*/

/*
  in the old redux we created action types, action creators, and a reducer with a switch case in it

  but now we dont need to add all those annoyingly repetitive stuff,
  now we can just directly call the actions to change the state.

  you could see it in action in the index.js of pages folder which would be explained more there

  But Franz ur clearly mutating the state when u do the state.counter++ instead of returning a new state u donkey,
    yes i know and shut ur flippin nose. it actually does not mutate the state because BEHIND THE SCENES it uses something called the Imer compiler (I think thats what it was called) which recognizes the changes and returns a new state based on those changes whether or not the method u would use mutates the state.

  example on how changing arrays would work BELOW
  (same concept with objects)
*/

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    setCount(state, action) {
      state.counter = action.payload;
    },
  },
});

//exporting the actions that could be used in the components or for the async actions if ever u have any
export const counterActions = counterSlice.actions;

//exporting reducer as default for the store (refer to index.js file of store folder)
export default counterSlice.reducer;

/*
  FOR THE REDUCERS in createSlice (if ever u had an array in ur state):

  so example u wana add an item to the array u could use the push method instead of doing the spread operator because either way it would recognize the change and return a new state behind the scenes (and ur not supposed to return anything manually)

    example if there was an array and u wanna add an item
    state.someArray.push(someItem); and thats all good

    you could use the spread operator but u gotta use it this way
    state.someArray = [...state.someArray, someItem];
    you see how I'm not returning anything instead just directly assigning it!
*/
