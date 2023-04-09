import { MdDeleteForever, MdOutlineDone } from "react-icons/md";
import { ITodo } from "../../models/ITodo";
import "./todolist.scss";
import { ChangeEvent } from "react";
import { ChangeTodo } from "../changetodo/ChangeTodo";


interface IToDoListProps {
    todos: ITodo [],
    deleteTask(id:number):void,
    changeTodoStatus(todo:ITodo): void,
    changeTodoTitle(todo:ITodo):void
}



export const ToDoList = (props:IToDoListProps) => {
    const handleDone = (todo:ITodo) => {
        props.changeTodoStatus(todo);
    }
    const handleDelete = (id:number) => {
        props.deleteTask(id);
    }
    const createTodoHtml = (todo:ITodo) => {
        return (
            <div className="todo" key={todo.id}>
                <ChangeTodo todo = { todo } changeTodoTitle = { props.changeTodoTitle }></ChangeTodo>
                <div>
                    <span>
                        <MdOutlineDone  onClick={()=>{handleDone(todo)}}/>
                    </span>
                    <span>
                        <MdDeleteForever onClick={()=>{handleDelete(todo.id)}}/>
                    </span>
                </div>
            </div>
        )
    }
    let htmlActive = props.todos.map((todo:ITodo)=>{
        if(todo.is_done ===0) {
            return (
                createTodoHtml(todo)
            )
        }
    })
    let htmlDone = props.todos.map((todo:ITodo)=>{
        if(todo.is_done !==0) {
            return (
                createTodoHtml(todo)
            )
        }
    })
    return (
    <div className="todosContainer">
        <div>
            <h3>Aktiva</h3>
            {htmlActive}
        </div>
        <div>
            <h3>Klara</h3>
            {htmlDone}
        </div>
    </div>
    )
        
}