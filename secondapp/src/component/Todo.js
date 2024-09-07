import React,{useState,useEffect} from 'react'

    const Todo=()=>{
        const[todos,setTodos]=useState([]);
        useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/todos')
          .then(responce=>responce.json())
          .then(data=>setTodos(data))
        },[]);
        return(
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos.slice(0,10).map(todo=>(//display first 10 todos
                    <li key={todo.id}>
                        <strong>{todo.title}</strong>-completed: {todo.completed ? "yes":"No"}
                    </li>
                ))}
                </ul>
            </div>
        );
    
};



export default Todo;
