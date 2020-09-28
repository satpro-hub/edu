import React from 'react'
import PropTypes from 'prop-types'


function TodoItem({todo,index,onChange}){
    console.log('todo',todo);
    const classes=[];
    if(todo.completed){
        classes.push('done');
    }
    console.log(classes);

    return <li className="item">
            <input type="checkbox" onChange={()=>onChange(todo.id)} />
            <span className={classes.join(' ')}><b>{index+1}</b>&nbsp;{todo.title} </span>
            <button>&times;</button>
    </li>
}

TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired
}

export default TodoItem;