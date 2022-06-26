import axios from "axios";


export const getTodoList = async ({page =1,size = 10}) => {

    const res = await axios.get(`http://localhost:8080/guest/todo/list`, {params:{page,size}})

    const responseDTO = res.data

    return responseDTO

}

export const addTodoPost = async (todo) => {

    const res = await axios.post(`http://localhost:8080/guest/todo/`, todo)

    return res.data
}