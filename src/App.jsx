
import './App.css'
import TodoFeatures from './component/TodoFeatures'
import TodoProvider from './component/TodoProvider'


function App() {
  return(
    <TodoProvider>
      <TodoFeatures />
       </TodoProvider>
  )
}

export default App
