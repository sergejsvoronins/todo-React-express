import axios, { AxiosResponse } from "axios";
import { ITodo, ITodoData } from "../models/ITodo"


const BASE_URL = "http://localhost:8001/todos";
export const getTodos = async () => {
    let response = await axios.get<ITodo[]>(BASE_URL);
    return response.data;
}
export const addTodo = async (todo:ITodoData) => {
    let response:AxiosResponse<ITodo> = await axios.post(BASE_URL, todo);
    console.log(response.status)
    return response.status;
}
export const updateTodoStatus = async (id:number) => {
    let response = await axios.put(`${BASE_URL}/${id}`);
    console.log(response.status)
    return response.status;
}
export const deleteTodo = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/${id}`);
    console.log(response.status)
    return response.status;
}