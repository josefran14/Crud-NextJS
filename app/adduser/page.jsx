"use client";
import { Form } from "@/components/Form";
import { Loading } from "@/components/UI/Loading";
import { useAddUser } from "@/hooks/useAddUser";

const page = () => {
  const { mutate: addUser, error, isError, isLoading } = useAddUser();

  const handleAddUser = (user) => {
    addUser(user);
  };

  if(isLoading){
    return <Loading/>
  }
  
  if(isError){
    return <Error error={error}/>
  }

  return (
    <Form
      title="Add User"
      titleButton="Add"
      initialValue={{}}
      handleSend={handleAddUser}
    />
  );
};

export default page;
