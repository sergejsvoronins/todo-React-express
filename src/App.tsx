import { log } from 'console';
import { useEffect, useState } from 'react';
import './App.css';
import { InputSection } from './components/Inputsection/Inputsection';
import { ToDoList } from './components/Todolist/Todolist';
import { ITodo } from './models/ITodo';





function App() {
  
    const [todo, setTodo] = useState<string>("");
    const [todos, updateTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      let stringFromLS: string | null = localStorage.getItem("todolist");
      if(stringFromLS){
          updateTodos(JSON.parse(stringFromLS));
      }
    }, []);
    const showTodos = (e:React.FormEvent)=> {
      e.preventDefault();
      if(todo) {
        updateTodos([...todos, {id:Date.now(), todo:todo, isDone:false}]);
        setTodo("");
      }

    }




    useEffect(() => {
      localStorage.setItem("todolist", JSON.stringify(todos))
    }, [todos]);


    console.log(todos);
    return (
    <div className="App">
      <InputSection  todo={todo} setTodo = {setTodo} showTodos = {showTodos}/>
      <ToDoList todos={todos} updateTodos={updateTodos} />
    </div>
  );
}

export default App;
