
import './App.css'
import AddTodo from './component/AddTodo'
import TodoLists from './component/TodoLists'
import themeContext from './context/theme';

{/**import react hook  */}
import { useReducer } from 'react';
import todoReducer from './reducers/todoReducer';


{/**import context  */}
import {TodoStateContext} from './context/todoContext'
import {TodoDispatcherContext} from './context/todoContext'


function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: 'primary',
    todoList: [],
  })

   {/**action to dispatch parameters  */}
 
 
 
 
  const handleChange = (e) => {
    dispatch({
      type : 'SET_THEME',
      theme: e.target.value
    })
  }


  return (
    

    
    <TodoStateContext.Provider value={state}>
    <TodoDispatcherContext.Provider value={dispatch}>

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
        <AddTodo />
        {/**on transmet la todolist a notre composant todoList */}
        <TodoLists 
        />
      </div>
      </div>
      </themeContext.Provider>

      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>

    
  )
}

export default App
