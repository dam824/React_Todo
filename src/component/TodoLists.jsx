import TodoItem from './TodoItem'
import EditTodo from './EditTodo'

const TodoLists = ({todoList, deleteTodo, toggleTodo, toggleEdit, editTodo, selectTask}) => {
  return todoList.length ?(
    <ul>
      {todoList.map((todo) => todo.edit ? (
          <EditTodo 
          key={todo.id} 
          todo={todo} 
          editTodo={(content) => editTodo(todo.id, content)} 
          cancelEditTodo={() => toggleEdit(todo.id)}
          />
      ) :(
      <TodoItem  
      key={todo.id} 
      todo={todo}
      editTodo ={() => toggleEdit(todo.id)}
      deleteTodo={()=> deleteTodo(todo.id)} 
      toggleTodo={()=> toggleTodo(todo.id)} 
      selectTask= {() => selectTask(todo.id)}
      />))}
    </ul>
    ) : <p>Aucunes liste pour le moment</p>  ;

  
}

export default TodoLists