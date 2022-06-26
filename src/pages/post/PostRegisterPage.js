import React, {useState} from 'react';
import {useContext} from "react";
import {PostContext} from "./index";
import {Navigate} from "react-router-dom";

const PostRegisterPage = () => {

    const {add} = useContext(PostContext)
    const [complete, setComplete] = useState(false)

    console.log("complete..............." + complete)

    const clickAdd = () => {
        const post = {title:'AAA', author:'tester'}

        add(post,() => {
            setComplete(!complete)
        })
    }

    if(complete){
        return (
            <Navigate replace to="/post/list"/>
        )
    }

    return (
        <div>
            <h1>Post RegisterPage</h1>
            <button onClick={() => clickAdd()}>ADD</button>
        </div>
    );
};

export default PostRegisterPage;