import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

export const useGetUserDetails = (userId) => {
    
  const getUser = () => {
    return axios.get(`https://fake-api-spartan.herokuapp.com/users/${userId}`);
  };

  const queryClient = useQueryClient();

  return useQuery(["users", userId], getUser, {
    initialData: () => {
      const user = queryClient
        ?.getQueryData("users")
        ?.data?.find((user) => user.id === parseInt(userId));
      if (user) {
        return {
          data: user,
        };
      } else {
        return undefined;
      }
    },
  });
};
