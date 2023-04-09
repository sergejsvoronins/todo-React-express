import { MdDeleteForever, MdOutlineDone } from "react-icons/md";
import { ITodo } from "../../models/ITodo";
import "./todolist.scss";

interface IToDoListProps {
    todos: ITodo [],
    deleteTask(id:number):void,
    changeTodoStatus(id:number): void,
}



export const ToDoList = (props:IToDoListProps) => {
    const handleDone = (id:number) => {
        props.changeTodoStatus(id);
    }
    const handleDelete = (id:number) => {
        props.deleteTask(id);
    }
     let html = props.todos.map((todo:ITodo)=>{
        return (
            <div className="todo" key={todo.id}>
                {todo.is_done===0 ? (<span className="todo__title">{todo.title}</span>) : (<span style={{color:"green"}} className="todo__title">{todo.title}</span>)}
                <div>
                    <span>
                        <MdOutlineDone  onClick={()=>{handleDone(todo.id)}}/>
                    </span>
                    <span>
                        <MdDeleteForever onClick={()=>{handleDelete(todo.id)}}/>
                    </span>
                </div>
            </div>
        )})
    return (
    <div className="todosContainer">
        {html}
    </div>
    )
        
}