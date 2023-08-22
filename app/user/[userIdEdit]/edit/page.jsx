"use client";
import { Form } from "@/components/Form";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import { useEditUser } from "@/hooks/useEditUser";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";

const page = ({ params }) => {
  const { userIdEdit } = params;

  const id = Number(userIdEdit);

  const {
    data: userDetails,
    error,
    isError,
    isLoading,
  } = useGetUserDetails(id);
  const { mutate: editUser } = useEditUser();

  const handleEditUser = (editDataUser) => {
    editUser({
      id,
      ...editDataUser,
    });
  };

  if(isLoading){
    return <Loading/>
  }
  
  if(isError){
    return <Error error={error}/>
  }

   const { data } = userDetails;

  return (
    <Form
      title="Edit User"
      titleButton="Edit"
      initialValue={data}
      handleSend={handleEditUser}
    />
  );
};

export default page;
