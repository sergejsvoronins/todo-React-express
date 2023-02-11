import { log } from "console";
import { ChangeEvent } from "react";
import { ITodo } from "../../models/ITodo";
import "./inputsection.scss";

interface IInputSection {
    todo: string;
    todos: ITodo [];
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    updateTodos:React.Dispatch<React.SetStateAction<ITodo[]>>;
}
export const InputSection = ({todo, setTodo, todos, updateTodos}: IInputSection) => {
    const showTodos = (e:React.FormEvent)=> {
      e.preventDefault();
      if(todo) {
        updateTodos([...todos, {todo:todo, isDone:false}]);
        setTodo("");
      }

    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    return (
        <form className="inputSection"onSubmit={showTodos}>
            <input 
                type="text" 
                placeholder="Skriv todo" 
                value={todo} 
                onChange={handleChange} />
            <button type="submit">Lägg till</button>
        </form>
    )
}