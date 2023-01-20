import React, { useState } from "react";
import { useAppSelector } from "../store/store";
import { deleteTodo ,updateStatusTodo } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";
const List = () => {
  // const [status, setStatus] = useState(false);
  // function handeToggle () {
  //   setStatus(prevStatus => !prevStatus)
  // }
 
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.person.persons);
  function handleClick(id : number){
    dispatch(deleteTodo({ id }))
  }
  function updateStatus(id : number) {
    
   dispatch(updateStatusTodo({id}))
  }
  
  
  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p>This is List Task:</p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white  ">
            <th className="p-2 border rounded">ID</th>
            <th className="p-2  border rounded">Name</th>
            <th className="p-2 border rounded">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr className="even:bg-slate-50" key={person.id}>
              <td className="p-2">{person.id}</td>
              <td className={person.status ? `done` : ""} onClick={() => updateStatus(person.id)}>{person.name}</td>
              <td className="p-2"><button onClick={() => handleClick(person.id)}  className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700">Delete</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
