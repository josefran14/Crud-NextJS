"use client"
import { AddUserButton } from "@/components/AddUserButton"
import { TableUsers } from "@/components/TableUsers"
import { useGetUsers } from "@/hooks/useGetUsers"
import { Typography } from "@mui/material"


const page = () => {

  const {data, error, isError, isLoading} = useGetUsers()

  if(isLoading){
    return <Typography variant="h6" sx={{color: "white", textAlign: "center"}}>Loading...</Typography>
  }

  if(isError){
    return <Typography variant="h6">{error.message}</Typography>
  }

  return (
    <>
      <Typography variant="h5" sx={{textAlign: "center", color: "white", fontFamily: "Open Sans"}}>
        Crud With NextJS
      </Typography>

      <AddUserButton/>

      <TableUsers data={data}/>
    </>
  )
}

export default page
