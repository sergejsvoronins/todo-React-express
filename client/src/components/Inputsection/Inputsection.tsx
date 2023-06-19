import { log } from "console";
import { ChangeEvent, useState } from "react";
import { ITodoData } from "../../models/ITodo";
import "./inputsection.scss";

interface IInputSectionProps {
    addTask(todo:ITodoData): void,
    resetLoading():void
}

export const InputSection = (props:IInputSectionProps) => {
    const [todo, setTodo] = useState<string>("");
    const showTodos = (e:React.FormEvent)=> {
        e.preventDefault();
        let newTodo : ITodoData = {title: todo, is_done: 0}
        props.addTask(newTodo);
        setTodo("");
        props.resetLoading();
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    return (
        <form className="inputSection" onSubmit={showTodos}>
            <input 
                type="text" 
                placeholder="Skriv todo" 
                value={todo} 
                onChange={handleChange} />
            <button type="submit">Lägg till</button>
        </form>
    )
}