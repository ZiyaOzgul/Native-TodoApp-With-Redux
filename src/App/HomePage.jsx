import {
  Dimensions,
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";
import { PlusIcon } from "react-native-heroicons/solid";
import { CloseCircleFilled } from "@ant-design/icons";
import { addTodo } from "../redux/todoSlice";

const { width, height } = Dimensions.get("screen");
const Home = () => {
  const [addItem, setAddItem] = useState(false);
  const allTodos = useSelector((state) => state.todo.todos);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.page}>
      <Input />
      <FlatList
        data={allTodos}
        renderItem={(todo) => <TodoCard todo={todo.item} />}
        keyExtractor={(todo) => todo.id}
      />
      <TouchableOpacity
        style={styles.plus}
        onPress={() => {
          setAddItem(!addItem);
        }}
      >
        <PlusIcon size={40} color={"green"} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={false}
        visible={addItem}
        onRequestClose={() => {
          alert("Not Eklenemedi");
          setAddItem(!addItem);
        }}
      >
        <View style={styles.modalPage}>
          <Text style={styles.title}>Add To Do </Text>

          <TextInput
            style={styles.text}
            placeholder="Start Coding..."
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity
            style={styles.add}
            onPress={() => {
              dispatch(addTodo(text));
              setAddItem(!addItem);
              setText("");
            }}
          >
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#1E293B",
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: width,
    height: height,
  },
  plus: {
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 18,
    right: 10,
    bottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  modalPage: {
    width: width,
    height: height,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#f0f0f0",
    fontWeight: "600",
    marginBottom: 20,
  },
  text: {
    backgroundColor: "#22AAEE",
    borderWidth: 2,
    borderColor: "#f0f0f0",
    width: width * 0.98,
    height: height * 0.08,
    borderRadius: 15,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
  },
  add: {
    width: width * 0.5,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0088ff",
    borderRadius: 18,
    borderColor: "#fff",
    borderWidth: 1.5,
  },
  addText: {
    fontSize: 24,
    color: "#fff",
  },
});
