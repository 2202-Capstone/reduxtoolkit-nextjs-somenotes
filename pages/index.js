import { VStack, Input, Button, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

// check out this import in line 8. You will be grateful for it because now we dont have to keep
// writing flippin 'connect' and mapToState and mapDispatch. Yehey!
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter/counterSlice";

export default function Home() {
  /*
    useSelector. it replaces our mapStateToProps. it extracts the value from the redux state.

    u see that the function inside returns state.count so that would give us the value of
    that part of the state which is { counter : 0 } from our counterReducer
    and i destructured it to directly get value of counter

    Reminder: if that value changes then the component would rerender with the new value.
  */
  const { counter } = useSelector((state) => state.count);

  const [countValue, setCountValue] = useState(0);

  //useDispatch. It replaces our mapDispatch. can directly dispatch actions in functions as seen below
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleSetCountValue = () => {
    if (!countValue) return alert("Invalid Input");
    /*
      this line 43 here is interesting cuz now we passing in a value to set the number of the counter
      so by default that value is accessed in the reducer from action.payload u can check that out in the
      counterSlice.js file of the store folder.
    */
    dispatch(counterActions.setCount(countValue));
  };

  const handleInputChange = (e) => {
    setCountValue(e.target.value);
  };
  return (
    <VStack spacing={3}>
      <Text fontSize="5xl">{counter}</Text>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <HStack>
        <Input
          type="number"
          placeholder="Set Counter Value"
          value={countValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleSetCountValue}>Set</Button>
      </HStack>
    </VStack>
  );
}
