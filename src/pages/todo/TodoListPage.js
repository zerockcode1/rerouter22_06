import React from 'react';
import { useSearchParams, useNavigate  } from "react-router-dom";
import {useContext, useState} from "react";
import {TodoContext} from "./index";
import Todo4Paging from "../../components/Todo4Paging";


const TodoListPage = () => {

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const [complete, setComplete] = useState(false)

    const pageNum = searchParams.get("page")||1

    console.log("-------------------------" + complete)

    const {todos,getList} = useContext(TodoContext)

    const movePage = (page) => {

        console.log(page)
        navigate(`../list?page=${page}`, { replace: true });
        setComplete(false)

    }

    if(!complete){
        getList(pageNum, () => {
            setComplete(!complete)
        })
    }

    if(!complete){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h3>Todo List Page</h3>

            <ul>

                {todos.dtoList.map(todo => <li key={todo.tno}> {todo.tno}</li>)}

            </ul>

            <Todo4Paging {...todos} movePage={movePage}></Todo4Paging>

        </div>
    );
};



export default TodoListPage;