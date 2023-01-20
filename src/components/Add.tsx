import React, { useRef } from "react";
import { addPerson, savePerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";
const Add = () => {
  function handleAddTodo(todo : string) {
    dispatch(addPerson({ name: todo }))
    if (inputRef.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      inputRef.current.focus();
    }
  } 
  const name = useRef<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="">New Todo :</label>
      <input
        ref= {inputRef}
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        onClick={() => handleAddTodo(name.current)}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </div>
  );
};

export default Add;
