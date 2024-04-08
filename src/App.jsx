
import './App.css'
import AddTodo from './component/AddTodo'
import TodoLists from './component/TodoLists'
import themeContext from './context/theme';

import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
     
  {/** ajouter une tache  */}
  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false
    }
      setTodoList([...todoList,todo  ])
  }

  {/** supprimer une tache  */}
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id) =>{
     setTodoList(
      todoList.map((todo) =>
      todo.id === id
      ? {
          ...todo,
          done: !todo.done
      }
      :todo
      )
     );
  }

 
 
  const editTodo = (id, content) => {
    setTodoList(todoList.map(todo => todo.id === id ? ({
      ...todo,
      edit: false,
      content
    }) : todo))
  }

  const selectTask = (id) => {
    setTodoList(
      todoList.map((todo) => 
      todo.id === id 
      ? ({
      ...todo,
      selected:true,
    }) : ({
      ...todo,
      selected:false
    })))
  }


  {/** editer une tache  */}
  const toggleEdit = (id) => {
    setTodoList(
      todoList.map((todo)=> 
      todo.id === id ? {
        ...todo,
        edit: !todo.edit
      }
      :todo
      )
    );
  }

  const [theme, setTheme] = useState('primary')
  const handleChange = (e) => {
    setTheme(e.target.value);

  }

  return (
    
    <themeContext.Provider value={theme}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <div className='card container p-20'>
        <h1 className='mb-20 flex-row justify-content-center align-items-center'>
          <span className='flex-fill'>Todo List </span>
          <select value={theme} onChange={handleChange}>
            <option value="primary">Orange</option>
            <option value="secondary">Bleu</option>
          </select>
          </h1>
        <AddTodo addTodo={addTodo} />
        {/**on transmet la todolist a notre composant todoList */}
        <TodoLists 
        todoList={todoList} 
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
