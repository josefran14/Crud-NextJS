import { Box, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

export const ActionsButtons = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: "14px"}}>
        <Button variant="contained" color="error" sx={{borderRadius: "12px"}}>
            <DeleteIcon/>
        </Button>
        <Button variant="contained" color="secondary" sx={{borderRadius: "12px"}}>
            <VisibilityIcon/>
        </Button>
        <Button variant="contained" color="info" sx={{borderRadius: "12px"}}>
            <EditIcon/>
        </Button>
    </Box>
  )
}
