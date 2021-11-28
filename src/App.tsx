import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
// import Counter from "./components/Counter";
import Todo, { TodoItem } from "./components/Todo";

import globalStyles from "./Styles";

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#d7fcfb",
    padding: 30,
  },
});

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((e) => console.log(e));
  }, []);

  // const handlePress = () => {
  //   setIsShown(!isShown);
  // };

  const handleChange = (value: string) => {
    // console.log("handleChange", value);
    setNewTodoTitle(value);
  };

  const addTodo = () => {
    // todos.push(
    // );
    // console.log("todos", todos);

    setTodos([
      {
        id: todos.length + 1,
        title: newTodoTitle,
      },
      ...todos,
    ]);

    setNewTodoTitle("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={[globalStyles.container, styles.safeAreaView]}>
      {/* <Button title={isShown ? "Hide" : "Show"} onPress={handlePress} /> */}
      <TextInput
        value={newTodoTitle}
        onChangeText={handleChange}
        placeholder="Enter a new todo"
      />
      <Button title="Add todo" onPress={addTodo} />
      {
        <ScrollView style={{ marginTop: 30 }}>
          {todos.map(({ id, title }) => (
            <Todo key={id} id={id} title={title} removeTodo={removeTodo} />
          ))}
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default App;
