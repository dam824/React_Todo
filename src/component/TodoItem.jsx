import Button from "./Button";
import {  useTodosDispatcher } from "../context/todoContext";
 

 
const TodoItem = ({todo}) => {
  const dispatch = useTodosDispatcher()

  return (
    <li 
    onClick={()=>dispatch({
      type: 'SELECT_TODO',
      id: todo.id
    })}
    className={`mb-10 t-flex flex-row justify-content-center aligns-item-center p-10 liItem ${todo.selected ? 'selected' : ' '}`}>
      <span className="flex-fill mr-15">{todo.content} {todo.done && <span style={{color:'orange'}}>✓</span>}</span>
      <Button 
      className="mr-15"
      onClick={(e) => {
        e.stopPropagation(); 
        dispatch({
          type: 'TOGGLE_TODO',
          id: todo.id
        })
      }}
      text="Valider"  
      />
      <Button 
      className="mr-15"
      onClick={(e) => {
        e.stopPropagation(); 
        dispatch({
          type: 'TOGGLE_EDIT_TODO',
          id: todo.id
        })
        }} 
        text="Modifier"
        />
      <Button onClick={(e)  =>{
        e.stopPropagation(); 
        dispatch({
          type:'DELETE_TODO',
          id: todo.id,
         });
        }} 
        text="supprimer"
        />
    </li>
  )
}

export default TodoItem