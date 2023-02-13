import { ITodo } from "../../models/ITodo";
import { MdOutlineDone, MdDeleteForever } from 'react-icons/md';


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
        todos.map((item:ITodo)=>
            // todos.indexOf(item)===i ? item.isDone:true
            todos.indexOf(item)===i ? {...item, isDone:!item.isDone}: item
    )
    console.log(todos);
    }  
    return <div key={index}>
        {todo.todo}
        <span>
            <MdOutlineDone onClick={()=>{handleDone(index)}}/>
        </span>
        <span>
            <MdDeleteForever onClick={()=>{handleDelete(index)}}/>
        </span>
        </div>
}