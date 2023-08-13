"use client"
import { TableUsers } from "@/components/TableUsers"
import { useGetUsers } from "@/hooks/useGetUsers"
import { Typography } from "@mui/material"


const page = () => {

  const {data, error, isError, isLoading} = useGetUsers()

  return (
    <>
      <Typography variant="h5" sx={{textAlign: "center", color: "white"}}>Crud With NextJS</Typography>
      <TableUsers data={data}/>
    </>
  )
}

export default page
