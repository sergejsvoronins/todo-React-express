import { log } from 'console';
import { useEffect, useState } from 'react';
import './App.scss';
import { InputSection } from './components/Inputsection/Inputsection';
import { ToDoList } from './components/Todolist/Todolist';
import { ITodo } from './models/ITodo';





function App() {
  
    const [todo, setTodo] = useState<string>("");
    const [todos, updateTodos] = useState<ITodo[]>([]);

    // useEffect(() => {
    //   let stringFromLS: string | null = localStorage.getItem("todolist");
    //   if(stringFromLS){
    //       updateTodos(JSON.parse(stringFromLS));
    //   }
    // }, []);

    // useEffect(() => {
    //   localStorage.setItem("todolist", JSON.stringify(todos))
    // }, [todos]);
    return (
    <div className="App">
      <h2>Todo-List</h2>
      <InputSection  todo={todo} setTodo = {setTodo} updateTodos = {updateTodos} todos={todos}/>
      <ToDoList todos={todos} updateTodos={updateTodos} />
    </div>
  );
}

export default App;
