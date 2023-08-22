"use client"
import { Box, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";

export const ActionsButtons = ({id, handleOpenModal}) => {

  const router = useRouter()

  const handleNavigateToPageOfDetails = (id) =>{
    router.push(`/users/${id}`)
  }

  const handleNavigateToPageEditUser = () =>{
    console.log("navigate edit")
    router.push(`/user/${id}/edit`)
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: "14px"}}>
        <Button onClick={() => handleOpenModal(id)} variant="contained" color="error" sx={{borderRadius: "12px"}}>
            <DeleteIcon/>
        </Button>
        <Button onClick={() => handleNavigateToPageOfDetails(id)} variant="contained" color="secondary" sx={{borderRadius: "12px"}}>
            <VisibilityIcon/>
        </Button>
        <Button onClick={() => handleNavigateToPageEditUser(id)} variant="contained" color="info" sx={{borderRadius: "12px"}}>
            <EditIcon/>
        </Button>
    </Box>
  )
}
