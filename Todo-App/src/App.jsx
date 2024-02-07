import React, { useState,useRef } from "react"

function App (){
  const [todo, setTodo] = useState([]);
  const input = useRef();

  //Add Todos
  const addTodo=(event)=> {
    event.preventDefault();
   input.current.value != "" ? todo.push(input.current.value) : alert('PLease enter value first');
    setTodo([...todo]);
    input.current.value="";
    console.log(todo);
  };

  //Delete Todos
 const deleteTodo = (index)=>{
      todo.splice(index,1);
      setTodo([...todo]);
      console.log(todo);
 };

 //Edit todo
 const editTodo = (index)=>{
     let edit = prompt('Enter Todo');
     todo.splice(index,1,edit);
     setTodo([...todo]);
     console.log(todo);
 };


  return (
    <>
      <h2>Todo App</h2>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter Todo" ref={input}/>
        <button type="submit">Add</button>
      </form>

      <ul>
        {
          todo.length > 0 ?(
          todo.map((item,index)=>{
             return(
                 <li key={index}>
                     {item}
                     <button onClick={()=>{deleteTodo(index)}}>Delete</button>
                     <button onClick={()=>{editTodo(index)}}>Edit</button>
                 </li>
             )   
          })
          ):<h3>No data found ...</h3>
        }
      </ul>
    </>
  )
}

export default App
