import React from 'react';
import TodoList from './Todo/TodoList'


function App() {

    const todos=[
      {id:1,completed:false,title:'купить хлеб'},
      {id:2,completed:false,title:'купить масло'},
      {id:3,completed:false,title:'купить молоко'},
      {id:4,completed:false,title:'купить колбасы1'},
      {id:5,completed:false,title:'купить королевских креветок'},
    ];

  return (
    <div className='wrapper'>
      <h1>React education</h1>
      <TodoList todos={todos} />
    </div>
  );

}

export default App;
