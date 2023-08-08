import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        complated: false,
      });
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newTodos;
    },
    changeComplated: (state, action) => {
      const id = action.payload.id;
      state.todos.map((item) =>
        item.id == id ? (item.complated = action.payload.complated) : null
      );
    },
  },
});

export const { changeComplated, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
