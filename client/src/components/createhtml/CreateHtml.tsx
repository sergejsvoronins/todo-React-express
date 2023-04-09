import { useEffect, useState } from "react";
import { ITodo, ITodoData } from "../../models/ITodo";
import { InputSection } from "../Inputsection/Inputsection";
import { ToDoList } from "../Todolist/Todolist";
import "./CreateHtml.scss";
import { addTodo, deleteTodo, getTodos, updateTodoStatus } from "../../services/todosService";

export const CreateHtml = () => {
    
    const [todos, updateTodos] = useState<ITodo[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const getData = async () => {
            let data = await getTodos();
            updateTodos(data);

        }
        if(!isLoading){
            getData();
            setLoading(true);
        }
    });
    const addTask = (task:ITodoData) => {
        addTodo(task);
        setLoading(false);
    }

    const deleteTask = (id:number) => {
        deleteTodo(id);
        setLoading(false);
        // updateTodos(todos.filter((item)=>todos.indexOf(item)!==i));
    }

    const changeTodoStatus = (id:number) => {
        // updateTodos(todos.map((item:ITodo)=>
        //     todos.indexOf(item)===IDBCursor ? {...item, isDone:!item.isDone}: item));
        updateTodoStatus(id);
        setLoading(false);
    } 


    console.log(todos);
    return (
        <div className="mainContainer">
            <h2>Todo-List</h2>
            <InputSection addTask={ addTask }/>
            <ToDoList todos={ todos } deleteTask = { deleteTask } changeTodoStatus = { changeTodoStatus }/>
        </div>
    )
}