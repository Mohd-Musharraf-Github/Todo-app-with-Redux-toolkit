import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, edittodo } from "../../Store/Slice/TodoSlice";

function TodoList() {
  const [currentValue, setCurrentValue] = useState("");
  const [getCUrrentEditedId, setGetCUrrentEditedId] = useState(null);

  console.log(currentValue);

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  

  function handleAddTodo() {
    dispatch(addTodo(currentValue));
    setCurrentValue("");
  }

  function handleDeleteTodo(getid) {
    dispatch(deleteTodo(getid));
  }

  function handleEditTodo() {
    dispatch(edittodo({ getCUrrentEditedId, currentValue }));
    setCurrentValue("");
    setGetCUrrentEditedId(null)
  }

  function handleUpdateTodo(getItem) {
    
    setGetCUrrentEditedId(getItem.id);
    setCurrentValue(getItem.title);
  }

  return (
    <div>
      <input
        type="text"
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
        name="todo"
        placeholder="Enter Todo Here...."
      />
      <button
        disabled={currentValue === ""}
        onClick={
          getCUrrentEditedId !== null
            ? () => handleEditTodo()
            : () => handleAddTodo()
        }
      >
        {getCUrrentEditedId === null ? "Add Todo" : "Edit Todo"}
      </button>
      <ul>
        {todoList && todoList.length > 0
          ? todoList.map((item) => (
              <li key={item.id}>
                <p>
                  {item.title}{" "}
                  <button onClick={() => handleDeleteTodo(item.id)}>
                    delete
                  </button>
                  <button onClick={() => handleUpdateTodo(item)}>
                    Edit Todo
                  </button>
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default TodoList;
