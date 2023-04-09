import { ChangeEvent, useState } from "react";
import { ITodo } from "../../models/ITodo";

interface IChangeTodoProps {
    todo: ITodo,
    changeTodoTitle(todo:ITodo):void
}

export const ChangeTodo = (props:IChangeTodoProps) => {
    const [todo, setTodo] = useState<ITodo>(props.todo);
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let updatedTodo = {...todo};
        updatedTodo.title = e.target.value;
        setTodo(updatedTodo);
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        props.changeTodoTitle(todo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value = {todo.title} onChange={handleChange}/>
        </form>
    )
}