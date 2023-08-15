"use client"
import { Form } from "@/components/Form"
import { useAddUser } from "@/hooks/useAddUser"

const page = () => {

  const {mutate: addUser} = useAddUser()

    const handleAddUser = (user) =>{
        addUser(user)
    }

  return (
    <Form title="Add User" titleButton="Add" initialValue={{}} onSubmit={handleAddUser}/>
  )
}

export default page
