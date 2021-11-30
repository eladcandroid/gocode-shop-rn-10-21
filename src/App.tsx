import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import Counter from "./components/Counter";
import Todo, { TodoItem } from "./components/Todo";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import globalStyles from "./Styles";

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#d7fcfb",
    padding: 30,
  },
});

type RootStackParamList = {
  Home: undefined;
  Details: { todoId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen for {route?.params?.todoId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
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
      <ScrollView style={{ marginTop: 30 }}>
        {todos.map(({ id, title }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            removeTodo={removeTodo}
            navigation={navigation}
            route={route}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
