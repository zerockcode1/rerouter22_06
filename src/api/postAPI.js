import axios from "axios";


export const getPostList = async () => {

    const res  = await axios.get("http://localhost/posts/")

    return res.data
}

export const addPost = async (post) => {

    const res = await axios.post("http://localhost/posts/", post)

    return res.data

}

export const deleteAjaxPost = async (id) => {

    const res = await axios.delete(`http://localhost/posts/${id}`)

    return res.data

}