import { useState,useRef, useEffect } from 'react'
import './CSS/todo.css'
import TodoItems from './TodoItems';
let count = 0;
const Todo = () => {
  const[Todos,setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = ()=>{
    setTodos([...Todos,{no:count++,text:inputRef.current.value,display:""}])
    inputRef.current.value = " ";
    localStorage.setItem("Todos-count",count)
  }
  useEffect(()=>{
   setTodos(JSON.parse(localStorage.getItem("Todos")))
   count = localStorage.getItem("Todos-count")
  },[])
  useEffect(()=>{  
   setTimeout(()=>{
    localStorage.setItem("Todos",JSON.stringify(Todos))
   },100)
  },[Todos])

return (
    <div className='todo'>
        <div className='todo-header'>To-Do list</div>
        <div className='todo-add'><input ref = {inputRef} placeholder='Add your Task' className='todo-input'/>
        <div onClick={()=>{add()}}className='todo-add-btn'>ADD</div>
        </div>
        <div>
            <div className="todo-list">
                {Todos.map((item,index)=>{
                  return <TodoItems setTodos = {setTodos} key={index} no={item.no} display={item.display} text={item.text}/>
                  })}
            </div>
        </div>
    </div>
  )
}

export default Todo