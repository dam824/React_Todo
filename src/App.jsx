
import './App.css'
import AddTodo from './component/AddTodo'
import TodoLists from './component/TodoLists'
import themeContext from './context/theme';

{/**import react hook  */}
import { useReducer } from 'react';
import todoReducer from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: 'primary',
    todoList: [],
  })

   {/**action to dispatch parameters  */}
 
  const addTodo = (content) => {
   dispatch({
    type: 'ADD_TODO',
    content
   })
  }


  const deleteTodo = (id) => {
     dispatch({
      type:'DELETE_TODO',
      id
     })
  }

  const toggleTodo = (id) =>{
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      })
  }

  const toggleEdit = (id) => {
      dispatch({
        type: 'TOGGLE_EDIT_TODO',
        id
      })
  }

 
  const editTodo = (id, content) => {
      dispatch({
        type: 'EDIT_TODO',
        id,
        content
      })
  }

  const selectTask = (id) => {
      dispatch({
        type: 'SELECT_TODO',
        id
      })
  }

  const handleChange = (e) => {
    dispatch({
      type : 'SET_THEME',
      theme: e.target.value
    })
  }

 
 

  

  return (
    
    <themeContext.Provider value={state.theme}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <div className='card container p-20'>
        <h1 className='mb-20 flex-row justify-content-center align-items-center'>
          <span className='flex-fill'>Todo List </span>
          <select value={state.theme} onChange={handleChange}>
            <option value="primary">Orange</option>
            <option value="secondary">Bleu</option>
          </select>
          </h1>
        <AddTodo addTodo={addTodo} />
        {/**on transmet la todolist a notre composant todoList */}
        <TodoLists 
        todoList={state.todoList} 
        deleteTodo={deleteTodo} 
        toggleTodo={toggleTodo} 
        toggleEdit={toggleEdit} 
        editTodo= {editTodo} 
        selectTask = {selectTask}
        />
      </div>
      </div>
      </themeContext.Provider>
    
  )
}

export default App
