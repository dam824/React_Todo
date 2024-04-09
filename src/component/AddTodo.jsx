 import { useState } from "react"
import Button from "./Button";
import {  useTodosDispatcher } from "../context/todoContext";

const AddTodo = () => {
    {/**la valeur de l'input a pas besoin d etre remontee dans l'app */}
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatcher()

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  const handleKeyDown = (e) => {
    if(e.code === "Enter" && value.length){
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
        setValue('');
    }
  }

  const handleClick = () => {
    if(value.length){
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
        setValue('');
    }
   
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
       <input type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="add toto" 
              className="mr-15 flex-fill"
        />
        <Button text="Add" onClick={handleClick}  />
       {/** click boutton recupere la value et passe en parametre de la fonction addTodo */} 
      
        </div>
  )
}

export default AddTodo