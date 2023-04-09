import express from "express";
import { createToDo, getAllTodos, removeTodo, updateTodoStatus } from "../controllers/todoController";
import { Request, Response } from "express";



export const todoRouter = express.Router();

todoRouter.get("/", (req:Request, res:Response, next) => {
    getAllTodos(req, res);
});
todoRouter.post("/", (req:Request, res:Response)=>{
    createToDo(req, res);
})
todoRouter.put("/:id", (req:Request, res:Response)=>{
    updateTodoStatus(req, res);
})
todoRouter.delete("/:id", (req:Request, res:Response)=>{
    removeTodo(req, res);
})