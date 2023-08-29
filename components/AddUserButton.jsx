"use client"

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export const AddUserButton = () => {

  const router = useRouter()

  const handleNavigateToPageAddUser = () =>{
    console.log("navigate")
    router.push("/adduser")
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "82%"
      }}
    >
      <Button onClick={handleNavigateToPageAddUser} variant="contained" color="success" sx={{ borderRadius: "12px" }}>
        <AddIcon />
      </Button>
    </Box>
  );
};
