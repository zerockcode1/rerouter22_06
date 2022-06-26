import React, {createContext, useState} from 'react';
import {getTodoList} from "../../api/todoAPI";
import {Navigate, Route, Routes} from "react-router-dom";
import ListPage from "../post/ListPage";
import PostRegisterPage from "../post/PostRegisterPage";
import TodoListPage from "./TodoListPage";


export const TodoContext = createContext()

const TodoPage = () => {

    const [todos, setTodos] = useState()

    const getList = (page, callback) => {

        getTodoList({page}).then((res) => {
            setTodos(res)
            callback()
        })
    }


    return (
        <TodoContext.Provider value={{todos,getList}}>
            <Routes>
                <Route path="/list" element={<TodoListPage></TodoListPage>} />
                <Route path="/" element={<Navigate replace to="/todo/list"/>} />
            </Routes>
        </TodoContext.Provider>
    );
};

export default TodoPage;