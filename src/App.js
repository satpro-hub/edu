import { func } from 'prop-types';
import React from 'react';
import TodoList from './Todo/TodoList'


function App() {

      const [todos,setTodos]= React.useState([
        {id:1,completed:false,title:'купить хлеб'},
        {id:2,completed:false,title:'купить масло'},
        {id:3,completed:false,title:'купить молоко'},
        {id:4,completed:false,title:'купить колбасы'},
        {id:5,completed:false,title:'купить королевских креветок'}
      ])


    function toggleTodo(id){
      setTodos(todos.map(todo => {
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      }))
  
    }


  return (
    <div className='wrapper'>
      <h1>React education</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );

}

export default App;
