import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { changeComplated, deleteTodo } from "../redux/todoSlice";

import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
const { width, height } = Dimensions.get("screen");

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return todo.complated ? (
    <TouchableOpacity
      style={styles.cardComplated}
      onPress={() =>
        dispatch(
          changeComplated({
            id: todo.id,
            complated: !todo.complated,
          })
        )
      }
    >
      <Text style={styles.title}>{todo.title} </Text>

      <CheckCircleIcon style={styles.checked} size={40} fill={"white"} />
      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        <XCircleIcon size={40} fill={"#ff404f"} />
      </TouchableOpacity>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.cardUncomplated}
      onPress={() =>
        dispatch(
          changeComplated({
            id: todo.id,
            complated: !todo.complated,
          })
        )
      }
    >
      <Text style={styles.title}>{todo.title} </Text>
      <ClockIcon style={styles.unChecked} size={40} fill={"#fafa44"} />
      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        <XCircleIcon size={40} fill={"#ff404f"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  cardComplated: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "#119a44",
    height: height * 0.1,
    width: width * 0.98,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cardUncomplated: {
    borderRadius: 25,
    backgroundColor: "#22AAEE",
    height: height * 0.1,
    width: width * 0.98,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#f0f0f0",
  },
  complated: {
    position: "absolute",
    right: 1,
    bottom: 1,
    color: "#44fa44",
    borderWidth: 1,
    borderRadius: 999,
    width: 20,
    height: 20,
  },
  checked: {
    position: "absolute",
    left: 4,
    top: 22,
  },
  unChecked: {
    position: "absolute",
    left: 4,
    top: 22,
    color: "red",
  },
  delete: {
    position: "absolute",
    right: 4,
    top: 22,
  },
});
