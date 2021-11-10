import React from "react";
import { Text, View } from "react-native";

type TodoProps = {
  id: number;
  title: string;
};

const Todo = ({ id, title }: TodoProps) => {
  return (
    <View>
      <Text>
        id: {id} {title}
      </Text>
    </View>
  );
};

export default Todo;
