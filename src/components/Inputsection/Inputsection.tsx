import { log } from "console";
import { ITodo } from "../../models/ITodo";

interface IInputSection {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    showTodos: (e:React.FormEvent)=>void;
}
export const InputSection = ({todo, setTodo, showTodos}: IInputSection) => {

    return (
        <form onSubmit={showTodos}>
            <input 
                type="text" 
                placeholder="Skriv todo" 
                value={todo} 
                onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit">Lägg till</button>
        </form>
    )
}