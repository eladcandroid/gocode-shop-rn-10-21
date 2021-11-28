import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  console.log("RENDER Counter");

  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Button title="+" color="#841584" onPress={handlePress} />
      <Text style={{ fontSize: 20 }}>{count}</Text>
    </View>
  );
};

export default Counter;
