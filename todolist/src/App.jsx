import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
        

function App() {
let [todolist,setTodolist]=useState([])


let savetodolist = (event) => {
  event.preventDefault();
  let toms = event.target.toms.value;

  if (!todolist.includes(toms)) {
    let finalTodolist = [...todolist, toms];
    setTodolist(finalTodolist);
  } else {
    alert("Task already exists!");
  }

};

 let Tasks=todolist.map((value,index)=>{
    return (
      <Tasklist value={value} key={index} indexno={index} setTodolist={setTodolist} todolist={todolist} />
    ) 
  }
)
  return (
    <div className='todo'>
      <Header />
      <form onSubmit={savetodolist}>
        <input type="text" placeholder="Add a new task" name='toms' />
        <div className="card flex justify-content-center">
          <Button label="save" icon="pi pi-check" />
        </div>
      </form>
      <div className='todolist'>
        {Tasks}
      </div>
      <Footer />
    </div>
  );
}


export default App

function Tasklist({value, indexno, setTodolist, todolist}) {
  let deleteTask = () => {
    let Finaldata = todolist.filter((v, i) => i !== indexno);
    setTodolist(Finaldata);
  };

  let [status,setStatus]=useState(false);

  let markDone=()=>{
    setStatus(!status);
  }
  return (
    <ul >
      <li onClick={markDone} className={status ? "active" : ""}>{indexno+1}. {value}</li> <span onClick={deleteTask}> &times; </span>
    </ul>
  );
}

  