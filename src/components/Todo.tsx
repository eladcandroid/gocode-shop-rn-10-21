import React from "react";
import { Button, Text, View } from "react-native";

export type TodoItem = {
  id: number;
  title: string;
};

type TodoProps = TodoItem & {
  removeTodo: (x: number) => void;
};

const Todo = ({ id, title, removeTodo }: TodoProps) => {
  // const handleRemove = () => {
  //   removeTodo();
  // };
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>
            id: {id} {title}
          </Text>
        </View>
      </View>
      <View style={{ width: 30 }}>
        <Button title="X" onPress={() => removeTodo(id)} />
      </View>
    </View>
  );
};

export default Todo;
