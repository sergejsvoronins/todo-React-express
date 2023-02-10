import { ITodo } from "../../models/ITodo";
import { MdOutlineDone, MdDeleteForever } from 'react-icons/md';

interface ISingleToDoProps {
    todo: ITodo;
    todos: ITodo[];
    updateTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const SingleToDo = ({todo,todos,updateTodos}:ISingleToDoProps) => {
    return <div>
        {todo.todo}
        <span>
            <MdOutlineDone />
        </span>
        <span>
            <MdDeleteForever />
        </span>
        </div>
}