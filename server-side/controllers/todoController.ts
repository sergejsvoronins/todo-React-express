import { ITodo, ITodoData } from "../models/ITodo";
import { Request, Response } from "express";
import { addTodo, deleteTodo, getLastRow, getTodos, setTodoStatus, setTodoTitle } from "../services/dbServices";

export const getAllTodos = (req: Request, res: Response) => {
    getTodos((err:Error, data: any)=>{

        console.log(data);
        err ? res.sendStatus(500) : res.send(data);
    });
};
export const createToDo = (req: Request, res: Response) => {
    const todo :ITodoData = req.body;
    if(todo.title && todo.is_done !==undefined) {
        addTodo(todo.title, todo.is_done, (err: any)=>{
            if (err){
                res.sendStatus(500);
            }
            else {
                getLastRow((err:any,data:any)=>{
                    console.log(data);
                    err ? res.sendStatus(500) : res.status(200).send(data);
                })
            }
        })
    }
    else {
        res.sendStatus(400);
    }
}
export const updateTodoStatus = (req: Request, res: Response) => {
    const id = req.body.id;
    console.log(id);
    setTodoStatus(id,  (err:any)=>{
        err ? res.sendStatus(500) : res.sendStatus(200);
    })

}
export const updateTodoTitle = (req: Request, res: Response) => {
    const todo: ITodo = req.body;
    if(todo.id && todo.title !==undefined) {
        setTodoTitle(todo.id, todo.title, (err: any)=>{
            err ? res.sendStatus(500) : res.sendStatus(200);
        })
    }
    else {
        res.sendStatus(400);
    }

}
export const removeTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    
    deleteTodo(id, (err:any)=>{
        err ? res.sendStatus(500) : res.sendStatus(200);
    })

}
