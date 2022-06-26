import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {PostContext} from "./index";
import { useSearchParams, useNavigate  } from "react-router-dom";

const ListPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [complete, setComplete] = useState(false)

    const pageNum = searchParams.get("page")||1

    console.log("-------------------------" + complete)

    const {posts,getList} = useContext(PostContext)

    if(!complete){
        getList(pageNum, () => {
            setComplete(!complete)
        })
    }

    if(!complete){
        return (<h1>Loading..........</h1>)
    }


    return (
        <div>
            <h1>Posts... List Page</h1>

            <Link to={"../register"}>Post Register</Link>

            <ul>
                {posts.map(post => <li key={post.id}> {post.id} -- {post.title}</li>)}
            </ul>

        </div>
    );
};

export default ListPage;