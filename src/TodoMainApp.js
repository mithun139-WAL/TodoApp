import { useReducer, useState } from "react";
import TodoList from "./TodoList";
import TodoContext from "./TodoContext";
import TodoForm from "./TodoForm";


export default function TodoMainApp() {
    return (
        <div>
            <TodoForm/>
        </div>
    );
}