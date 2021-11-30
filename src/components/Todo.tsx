import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import { HomeScreenProps } from "../App";
export type TodoItem = {
  id: number;
  title: string;
};

type TodoProps = TodoItem & {
  removeTodo: (x: number) => void;
} & HomeScreenProps;

const Todo = ({ id, title, removeTodo, navigation }: TodoProps) => {
  // const handleRemove = () => {
  //   removeTodo();
  // };

  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <View style={{ flex: 1 }}>
        <Pressable
          onPress={() => navigation.navigate("Details", { todoId: id })}
        >
          <Text>{title}</Text>
        </Pressable>
      </View>
      <View style={{ width: 30 }}>
        <Button title="X" onPress={() => removeTodo(id)} />
      </View>
    </View>
  );
};

export default Todo;
