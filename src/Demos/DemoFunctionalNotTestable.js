import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { usePrevious } from "../usePrevious";


function DemoFunctionalComponent({ name, onUnmount }) {
    
  const [prevDisplayName, setprevDisplayName] = useState();
  const [counter, setCounter] = useState(0);
  const prevName = usePrevious(name);

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []);


  useEffect(() => {
    if (prevName && prevDisplayName !== prevName && prevName !== name) {
      setprevDisplayName(prevName);
    }
  }, [name, prevName]);



  const increaseCounter = (prevCounter) => {
    return prevCounter + 1;
  };



  const handlePressBtn = () => {
    setCounter(increaseCounter(counter));
  };


  return (
    <View>
      {prevDisplayName && <Text> {prevDisplayName} has logged out </Text>}
      <Text> Welcome {name || "Guest"} </Text>
      <Text> You Clicked this Btn {counter} times </Text>
      <Button title="Press Me" onPress={handlePressBtn} />
    </View>
  );
}

export default DemoFunctionalComponent;

export { increaseCounter };
