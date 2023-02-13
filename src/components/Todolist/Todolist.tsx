import { ITodo } from "../../models/ITodo";
import { SingleToDo } from "../Singletodo/Singletodo";
import "./todolist.scss";

interface ITodolistProps {
    todos: ITodo[];
    updateTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const ToDoList = ({todos, updateTodos}:ITodolistProps) => {
    return (
    <div className="todosContainer">
        {todos.map((todo, index)=>
        <SingleToDo  key={index} index={index} todo={todo} todos={todos} updateTodos={updateTodos}/>
        )}
    </div>
    )
        
}