import themeContext from '../context/theme';
import {TodoStateContext} from '../context/todoContext'
import {TodoDispatcherContext} from '../context/todoContext' 


{/**import react hook  */}
import { useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, {
        theme: 'primary',
        todoList: [],
      })
  return (

    <TodoStateContext.Provider value={state}>
        <TodoDispatcherContext.Provider value={dispatch}>
            <themeContext.Provider value={state.theme}>
            {children}
             </themeContext.Provider>
        </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>

  )
}

export default TodoProvider