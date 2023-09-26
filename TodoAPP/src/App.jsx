import { useRef } from "react";
import { addtodo } from "../Redux/Todoslice";

import { useDispatch } from "react-redux";
import TodoDisplay from "./TodoDisplay";

function App() {
  const todoref = useRef();
  const dispatch = useDispatch();
  // if(todoref.current.value === 0){
  //   return (
  //     <div>
  //       <h1>Write Some thing</h1>
  //     </div>
  //   );

  // }

  const addtodoo = () => {
    if (todoref.current.value === "") {
      return;

    }

    dispatch(
      addtodo({
        title: todoref.current.value,
        done: false,
        id: Date.now(),
      })
    );
  };


  return (
    <>
      <div className="flex border-l-orange-200 w-36 h-80 ">
        <input ref={todoref} type="text" placeholder="Write Todo" />

        <div className= " bg-green-400 text-white"> </div>
        <button onClick={addtodoo}>Add</button>

      </div>
      <TodoDisplay/>
    </>
  );
}

export default App;
