 import { useState } from "react"
import Button from "./Button";

import { useTodosDispatcher } from "../context/todoContext";
 


const EditTodo = ({todo}) => {
  const [value, setValue] = useState(todo.content);
  const dispatch = useTodosDispatcher()

  const handleChange = (e) => {
    const inputValue = e.target.value
    setValue(inputValue)
  }

  const handleClick = () => {
    if(value.length){
      dispatch({
        type: 'EDIT_TODO',
        id: todo.id,
        content: value
      })
        setValue('');
    }
  }

  const handleKeyDown = (e) => {
    if(e.code ==="Enter"){
      dispatch({
        type: 'EDIT_TODO',
        id: todo.id,
        content: value
      })
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
       {/** click boutton recupere la value et passe en parametre de la fonction addTodo */} 
       <Button  onClick={handleClick} text="Modifier"  className="mr-15" theme="primary" />
       <Button  onClick={()=>(dispatch)({
          type: 'TOGGLE_EDIT_TODO',
          id: todo.id
        })} text="Annuler" theme="secondary" />
        
        
        </div>
  )
}

export default EditTodo