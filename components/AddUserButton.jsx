"use client"

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export const AddUserButton = () => {

  const router = useRouter()

  const handleNavigateToPageAddUser = () =>{
    router.push("/adduser")
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "89%",
        marginLeft: "5px",
      }}
    >
      <Button onClick={handleNavigateToPageAddUser} variant="contained" color="success" sx={{ borderRadius: "12px" }}>
        <AddIcon />
      </Button>
    </Box>
  );
};
