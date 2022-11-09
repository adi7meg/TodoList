import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import { useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {

  const onDelete = (tt) =>{
    console.log("Delete Called",tt)

    setTodos(todos.filter((e)=>{
      return  e!== tt
    }))
  }

  const addTodo =(title,desc)=>{

    console.log("Add todo called" ,title, desc)
    let sno;
    if(todos.length==0){
      sno = 1 ;
    }
    else{
      sno = todos[todos.length-1].sno +1
     }

    const myTodo ={
      sno,
      title,
      desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }


const [todos, setTodos]= useState(
  [
    {
      sno:1,
      title:"qwertyuiiiiiiiiiiiiiiiiuytre",
      desc:"asdfghjkzxcbb"
    },
    {
      sno:2,
      title:"yyyyyyyyy",
      desc:"gghghghghh"
    },
    {
      sno:3,
      title:"kjkjkjkjk",
      desc:"llllllll"
    }
  ])

  return (
    <>
     <Header title="MY To DO" searchbar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
