
import AddTodo from './AddTodo'
import TodoLists from './TodoLists'
import { useTodos, useTodosDispatcher } from '../context/todoContext';


const TodoFeatures = () => {
    const dispatch = useTodosDispatcher();
    const state = useTodos();
    const handleChange = (e) => {
        dispatch({
          type : 'SET_THEME',
          theme: e.target.value
        })
      }
    return (
        <div className='d-flex flex-row justify-content-center align-items-center'>
        <div className='card container p-20'>
          <h1 className='mb-20 flex-row justify-content-center align-items-center'>
            <span className='flex-fill'>Todo List </span>
            <select value={state.theme} onChange={handleChange}>
              <option value="primary">Orange</option>
              <option value="secondary">Bleu</option>
            </select>
            </h1>
          <AddTodo />
          {/**on transmet la todolist a notre composant todoList */}
          <TodoLists 
          />
        </div>
        </div>
       
    )
}

export default TodoFeatures