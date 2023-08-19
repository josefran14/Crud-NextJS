"use client"
import { AddUserButton } from "@/components/AddUserButton"
import { ModalDeleteUser } from "@/components/ModalDeleteUser"
import { TableUsers } from "@/components/TableUsers"
import { useGetUsers } from "@/hooks/useGetUsers"
import { useModalDelete } from "@/hooks/useModalDelete"
import { Typography } from "@mui/material"


const page = () => {

  const {data, error, isError, isLoading} = useGetUsers()

  const {modal, handleOpenModal, handleCloseModal, userId} = useModalDelete()

  if(isLoading){
    return <Typography variant="h6" sx={{color: "white", textAlign: "center"}}>Loading...</Typography>
  }

  if(isError){
    return <Typography variant="h6">{error.message}</Typography>
  }

  return (
    <>
      <Typography variant="h5" sx={{textAlign: "center", color: "white"}}>
        Crud Of Francisco Saavedra
      </Typography>

      <AddUserButton/>

      <ModalDeleteUser modal={modal} handleCloseModal={handleCloseModal} userId={userId}/>

      <TableUsers data={data} handleOpenModal={handleOpenModal}/>
    </>
  )
}

export default page
