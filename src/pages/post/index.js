import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import PostRegisterPage from "./PostRegisterPage";
import ListPage from "./ListPage";
import { Navigate } from "react-router-dom";

import {addPost, getPostList} from "../../api/postAPI";


export const PostContext = createContext()

const PostPages = () => {

    console.log("post pages")

    const [posts, setPosts] = useState([])

    const getList = (page, callback) => {
        getPostList(page).then(posts => {
            setPosts(posts)
            callback()
        })
    }

    const add = (post, callback) => {

        addPost(post).then(() => { callback() })
    }

    return (
        <PostContext.Provider value={{posts, getList, add}}>
        <Routes>

            <Route path="/list" element={<ListPage />} />
            <Route path="/register" element={<PostRegisterPage/>}></Route>
            <Route path="/" element={<Navigate replace to="/post/list"/>} />
        </Routes>
        </PostContext.Provider>
    );
};

export default PostPages;