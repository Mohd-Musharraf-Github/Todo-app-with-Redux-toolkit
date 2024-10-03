import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const newlyCreatedTodo = {
        id: state.todoList.length === 0 ? 1 : state.todoList.length + 1,
        title: action.payload,
      };

      state.todoList.push(newlyCreatedTodo);
      return state;
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      return state;
    },

    edittodo(state, action) {
      console.log(action);
      console.log(action.payload.getCUrrentEditedId);

      const newTodoState = state.todoList;
      const getid = newTodoState.findIndex(
        (item) => item.id === action.payload.getCUrrentEditedId);
      console.log(getid);

      newTodoState[getid] = {...newTodoState[getid],title: action.payload.currentValue}
      return state;
    },
  },
});

export const { addTodo, deleteTodo, edittodo } = todoReducer.actions;
export default todoReducer.reducer;
