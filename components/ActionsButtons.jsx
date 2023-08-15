"use client"
import { Box, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";
import { useDeleteUser } from "@/hooks/useDeleteUser";

export const ActionsButtons = ({id}) => {

  const {mutate: deleteUser} = useDeleteUser()

  const handleDelete = () =>{
    deleteUser(id)
  }

  const router = useRouter()

  const handleNavigateToPageOfDetails = () =>{
    router.push(`/users/${id}`)
  }

  const handleNavigateToPageEditUser = () =>{
    router.push(`/user/${id}/edit`)
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: "14px"}}>
        <Button onClick={handleDelete} variant="contained" color="error" sx={{borderRadius: "12px"}}>
            <DeleteIcon/>
        </Button>
        <Button onClick={handleNavigateToPageOfDetails} variant="contained" color="secondary" sx={{borderRadius: "12px"}}>
            <VisibilityIcon/>
        </Button>
        <Button onClick={handleNavigateToPageEditUser} variant="contained" color="info" sx={{borderRadius: "12px"}}>
            <EditIcon/>
        </Button>
    </Box>
  )
}
