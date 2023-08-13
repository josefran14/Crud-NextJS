import axios from "axios"
import { useQuery } from "react-query"

export const useGetUsers = () => {

    const getUsers = () =>{
        return axios.get("https://fake-api-spartan.herokuapp.com/users")
    }

    return useQuery("users", getUsers)
}
