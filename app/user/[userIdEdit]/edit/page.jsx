"use client"
import { Form } from "@/components/Form"
import { useEditUser } from "@/hooks/useEditUser"
import { useGetUserDetails } from "@/hooks/useGetUserDetails"
import { Typography } from "@mui/material"

const page = ({params}) => {

    const {userIdEdit} = params

    const id = Number(userIdEdit)

    const {data: userDetails, error, isError, isLoading} = useGetUserDetails(id)
    const {mutate: editUser} = useEditUser()

    const handleEditUser = (editDataUser) =>{
        editUser({
            id,
            ...editDataUser
        })
    }

    if(isLoading){
        return <Typography variant="h6" sx={{color: "white", textAlign: "center"}}>Loading...</Typography>
    }
    
    if(isError){
        return <Typography variant="h6">{error.message}</Typography>
    }

    const {data} = userDetails

  return (
    <Form title="Edit User" titleButton="Edit" initialValue={data} handleSend={handleEditUser}/>
  )
}

export default page
