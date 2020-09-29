import React,{useEffect,useState} from 'react';
import TodoList from './Todo/TodoList'
import ArduinoList from './Arduino/ArduinoList'
import Context from './context'
import Loader from './Loader'


function App() {

      const [todos,setTodos]= React.useState([
        {id:1,completed:false,title:'купить хлеб'},
        {id:2,completed:false,title:'купить масло'},
        {id:3,completed:false,title:'купить молоко'},
        {id:4,completed:false,title:'купить колбасы'},
        {id:5,completed:false,title:'купить королевских креветок'}
      ])

      const[loading,setLoading]=React.useState(true)
      
      const[arduino_loading,setArduinoLoading]=React.useState(true)


      useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((response) => response.json())
            .then(todos =>{
              setTimeout(()=>{
                setTodos(todos)
                setLoading(false)
              }
              ,2000)
            })
            
      },[])


    function toggleTodo(id){
      setTodos(todos.map(todo => {
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      }))
    }


    function removeTodo(id){
        setTodos(todos.filter(todo=>todo.id!==id))
    }

    function checkTodo(id){
        console.log(id);
    }

    function onLoadingDone(param){
      setArduinoLoading(param);
    }

    
  return (
    <Context.Provider value={{removeTodo,checkTodo:checkTodo}}>
    <div className='wrapper'>
      <div className='edu-wrapper'>
        <h1>React education</h1>
        {loading && <Loader />}
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
      <div className='arduino-wrapper'>
      <h1>Temperature&Humidity </h1>
          {arduino_loading && <Loader />} 
         <ArduinoList onLoadingDone={onLoadingDone} /> 
      </div>
    </div>
    </Context.Provider>
  );

}

export default App;
