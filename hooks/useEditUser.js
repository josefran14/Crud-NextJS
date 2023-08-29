import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useEditUser = () => {

    const editUser = async (newData) => {
        const response = await axios.put(
            `https://fake-api-spartan.herokuapp.com/users/${newData.id}`,
          newData
        );
        return await response.data;
      };

      const queryClient = useQueryClient()

      return useMutation(editUser, {
        onSuccess: () =>{
            queryClient.invalidateQueries("users")
        },
        onError: (error) =>{
            console.log("error edit", error)
        }
      })
}
