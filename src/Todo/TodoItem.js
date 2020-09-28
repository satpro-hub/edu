import React from 'react'


export default function TodoItem({todo,index}){
return <li className="item">
            <input type="checkbox" />
            <span><b>{index+1}</b>&nbsp;{todo.title} </span>
            <button>&times;</button>
    </li>
}