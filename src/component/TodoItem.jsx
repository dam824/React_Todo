import Button from "./Button";

 

const TodoItem = ({todo, deleteTodo, toggleTodo, editTodo, selectTask}) => {
  return (
    <li 
    onClick={selectTask}
    className={`mb-10 t-flex flex-row justify-content-center aligns-item-center p-10 liItem ${todo.selected ? 'selected' : ' '}`}>
      <span className="flex-fill mr-15">{todo.content} {todo.done && <span style={{color:'orange'}}>✓</span>}</span>
      <Button 
      className="mr-15"
      onClick={(e) => {
        e.stopPropagation(); 
        toggleTodo(); 
      }}
      text="Valider"  
      />
      <Button 
      className="mr-15"
      onClick={(e) => {
        e.stopPropagation(); 
        editTodo() 
        }} 
        text="Modifier"
        />
      <Button onClick={(e)  =>{
        e.stopPropagation(); 
        deleteTodo() 
        }} 
        text="supprimer"
        />
    </li>
  )
}

export default TodoItem