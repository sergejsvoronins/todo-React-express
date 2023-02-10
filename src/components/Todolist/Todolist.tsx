import { ITodo } from "../../models/ITodo";
import { SingleToDo } from "../Singletodo/Singletodo";

interface ITodolistProps {
    todos: ITodo[];
    updateTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const ToDoList = ({todos, updateTodos}:ITodolistProps) => {
    return (
    <div>
        {todos.map((todo)=>
        <SingleToDo key = {todo.id} todo={todo} todos={todos} updateTodos={updateTodos}/>
        )}
    </div>
    )
        
}