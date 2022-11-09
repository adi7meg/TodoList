import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    console.log(props.todos.length)
  return (
    <div className='container'>
        <h3>Todos List</h3>
    
        {/* <TodoItem todos={props.todos[1]}/> */}
        {props.todos.length === 0 ? "No Todos" :props.todos.map((todo,id)=>{
            return <TodoItem key={id} todos={todo} onDelete={props.onDelete}/>
                 
    })}


        {/* {props.todos.map((todo,id)=>{
            return <TodoItem key={id} todos={todo} onDelete={props.onDelete}/>
                 
    })} */}

    </div>
  )
}

export default Todos