import sqlite from "sqlite3";
import { ITodo } from "../models/ITodo";


export const db = new sqlite.Database("database.db");


const createTables = [
    `
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            is_done BOOLEAN
        )
    `
];

createTables.forEach((t) =>{
    db.run(t);
})

export const getTodos = (callback:any) => {
    const query = `
        SELECT * FROM todos
    `;
    db.all(query,callback);
}
// export const getTodoById = (id:string, callback) => {
//     const query = `
//         SELECT * FROM todos WHERE id = ?
//     `;
//     const values = [id];
//     db.run(id, callback);
// }
export const addTodo = (title:string, is_done:boolean, callback:any) => {
    const query = `
        INSERT INTO todos (title, is_done)
        VALUES (?,?)
    `;
    const values = [
        title,
        is_done
    ];
    db.run(query,values, callback);
}
export const setTodoStatus = (id:string, callback:any) => {
    const query = `
        UPDATE todos SET is_done = CASE WHEN is_done = 0 THEN 1 ELSE 0 END WHERE id = ?
    `;
    const values = [
        id
    ];
    db.run(query,values, callback);
}
export const deleteTodo = (id:string, callback:any) => {
    const query = `
        DELETE FROM todos WHERE id=?
    `;
    const values = id;
    db.run(query,values, callback);
}

export const getLastRow = (callback:any) => {
    const query = `
        SELECT id FROM todos ORDER BY id DESC LIMIT 1
    `;
    db.get(query, callback);
}