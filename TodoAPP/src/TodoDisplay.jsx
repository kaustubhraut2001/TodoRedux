import React from "react";
import { removetodo } from "../Redux/Todoslice";
import { useSelector, useDispatch } from "react-redux";

const TodoDisplay = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div>
        <h1>Nothing to show</h1>
      </div>
    );
  }

  return (
    <>

	<div className=" flex justify-between  "></div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>

			<div className=" bg-red-600 text-white "></div>
            <button
              onClick={() => {
                dispatch(
                  removetodo({
                    id: todo.id,
                  })
                );
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoDisplay;
