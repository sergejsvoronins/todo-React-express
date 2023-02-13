import { ITodo } from "../../models/ITodo";
import { MdOutlineDone, MdDeleteForever } from 'react-icons/md';
import "./singletodo.scss";


interface ISingleToDoProps {
    index: number;
    todo: ITodo;
    todos: ITodo[];
    updateTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}



export const SingleToDo = ({index, todo,todos,updateTodos}:ISingleToDoProps) => {

    const handleDelete = (i:number) => {
        updateTodos(todos.filter((item)=>todos.indexOf(item)!==i));
    }

    const handleDone = (i:number) => {
        updateTodos(todos.map((item:ITodo)=>
            todos.indexOf(item)===i ? {...item, isDone:!item.isDone}: item));
        
    }  

    return <div className="todo" key={index}>
            {!todo.isDone ? (<span className="todo__title">{todo.todo}</span>) : (<s className="todo__title">{todo.todo}</s>)}
            <div>
                <span>
                    <MdOutlineDone onClick={()=>{handleDone(index)}}/>
                </span>
                <span>
                    <MdDeleteForever onClick={()=>{handleDelete(index)}}/>
                </span>
            </div>
    </div>
}