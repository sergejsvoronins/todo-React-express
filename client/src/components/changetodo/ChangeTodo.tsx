import { ChangeEvent, useState } from "react";
import { ITodo } from "../../models/ITodo";
import "./ChangeTodo.scss";
interface IChangeTodoProps {
    todo: ITodo,
    changeTodoTitle(todo:ITodo):void,
    handleDelete(id: number):void
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
        todo.title === "" ? props.handleDelete(todo.id) : props.changeTodoTitle(todo);
    }
    return (
        <form onSubmit={handleSubmit} className="editTodo">
            <input type="text" value = {todo.title} onChange={handleChange}/>
        </form>
    )
}