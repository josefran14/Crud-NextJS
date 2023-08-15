import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useAddUser = () => {
    const addUser = (user) =>{
        return axios.post("https://fake-api-spartan.herokuapp.com/users", user)
    }

    const queryClient = useQueryClient()

    return useMutation(addUser, {
        onSuccess: () =>{
            queryClient.invalidateQueries("users")
        },
        onError: (error) =>{
            console.log(error)
        }
    })
}
