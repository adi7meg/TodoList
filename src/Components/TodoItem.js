import React from 'react'

const TodoItem = ({todos, onDelete}) => {
    console.log(todos)
  return (
    <div>
        <div>
            <h4>{todos.sno}</h4>
            <p>{todos.title}</p>
            <p>{todos.desc}</p>
            <button type="button" className="btn btn-outline-danger" onClick={()=>onDelete(todos)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem