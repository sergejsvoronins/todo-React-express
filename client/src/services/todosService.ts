import axios, { AxiosResponse } from "axios";
import { ITodo, ITodoData } from "../models/ITodo"


const BASE_URL = "http://localhost:8001/todos";
export const getTodos = async () => {
    let response = await axios.get<ITodo[]>(BASE_URL);
    return response.data;
}
export const addTodo = async (todo:ITodoData) => {
    let response:AxiosResponse<ITodo> = await axios.post(BASE_URL, todo);
    return response.status;
}
export const updateTodoStatus = async (todo:ITodo) => {
    let response = await axios.put(BASE_URL, todo);
    return response.status;
}
export const updateTodoTitle = async (todo:ITodo) => {
    let response = await axios.patch(BASE_URL, todo);
    return response.status;
}
export const deleteTodo = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/${id}`);
    return response.status;
}