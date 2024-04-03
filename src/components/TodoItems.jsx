import './CSS/todoItems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'
const TodoItems = ({no,display,text,setTodos}) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("Todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };
  
    
    
   const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("Todos")); 
    for(let i=0;i<data.length;i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through"
        }
        else{
          data[i].display = ""
        }
        break;
      }
      
    }
    setTodos(data);

  }

  return (
    <div className='todo-items'>
        <div className={`todo-items-container  ${display}`} onClick={()=>{toggle(no)}}>
         {display === ""? <img src = {not_tick} alt = " "></img>:  <img src = {tick} alt = " "></img>}          
          <div className="todo-items-text">{text}</div>
        </div>
        <img className = 'todoitems-cross-icon' src = {cross} alt = " " onClick = {()=>{deleteTodo(no)}}></img>
    </div>
  )
}

export default TodoItems