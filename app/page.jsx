"use client"
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleNavigateToPageOfUsers = () => {
    router.push("/users");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <Typography
        sx={{
          marginTop: "-50px",
          fontSize: "4vw",
          color: "grey",
          fontWeight: "600",
        }}
      >
        Crud with Next JS
      </Typography>
      <Typography
        sx={{
          color: "#0962CA",
          fontSize: "3vw",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        by Francisco Saavedra
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "12px" }}
        onClick={handleNavigateToPageOfUsers}
      >
        View users table
      </Button>
    </Box>
  );
};

export default page;
