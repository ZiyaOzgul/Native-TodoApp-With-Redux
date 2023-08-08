import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

const Input = () => {
  const allTodos = useSelector((state) => state.todo.todos);

  const lenght = allTodos.filter((item) => !item.complated).length;

  return (
    <View style={styles.page}>
      <Text style={styles.title}>To Do List</Text>

      <Text style={styles.length}>{lenght} Left </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  page: {
    width: width * 0.98,
    height: height * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0E7CB2",
    borderRadius: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 32,
    color: "#f0f0f0",
    marginLeft: 20,
  },
  length: {
    fontSize: 26,
    fontWeight: "400",
    color: "#f0f0f0",
    marginRight: 8,
  },
});
