import React, { useState } from 'react'
import '../App.css'
const AddTodo = ({addTodo}) => {

    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")

    const submit = (e)=>{
        e.preventDefault() //prevents reloading
        
        if(!title || !desc){alert("Fields Can not be Empty")}
        addTodo(title,desc)
    }

  return (
<div className='container'>
 <h1  className='mb-3'>Add a Todo </h1>

<form onSubmit={submit}>
    <div className="form-group mb-3">
      <label htmlFor="title">Add Todo</label>
      <input type="text" className="form-control" value={title} id="title" onChange={(e)=>setTitle(e.target.value)} placeholder="Title..."/>
    </div>

    <div className="form-group mb-3">
      <label htmlFor="desc">Password</label>
      <input type="text" className="form-control" value={desc} id="desc" onChange={(e)=>setDesc(e.target.value)} placeholder=" Todo Description"/>
    </div>
    
    <button type="submit" className="btn btn-primary ">Submit</button>
  </form>
</div>
  )
}

export default AddTodo