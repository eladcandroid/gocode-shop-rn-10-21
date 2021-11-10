import React from "react";
import { SafeAreaView } from "react-native";
import Todo from "./components/Todo";

const App = () => {
  const todos = [
    {
      id: 1,
      title: "Do H.W",
    },
    {
      id: 2,
      title: "Wash the dishes",
    },
  ];
  return (
    <SafeAreaView style={{ padding: 30 }}>
      {todos.map(({ id, title }) => (
        <Todo id={id} title={title} />
      ))}
    </SafeAreaView>
  );
};

export default App;
