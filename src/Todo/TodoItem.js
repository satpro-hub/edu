import React,{ useContext }  from 'react'
import PropTypes from 'prop-types'
import Context from '../context';


function TodoItem({todo,index,onChange}){
    
    //console.log('todo',todo);
 
    const {removeTodo,checkTodo} = useContext(Context)

    const classes=['test'];
    if(todo.completed){
        classes.push('done');
    }

    return <li className="item">
            <input type="checkbox" onChange={()=>onChange(todo.id)} />
            <span className={classes.join(' ')}><b>{index+1}</b>&nbsp;{todo.title} </span>

            <span>
            <button className='ch' onClick={()=>checkTodo(todo.id)}>id</button>
            <button className='rm' onClick={()=>removeTodo(todo.id)}>&times;</button>
            </span>
    </li>
}

//function 

TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired
}

export default TodoItem;