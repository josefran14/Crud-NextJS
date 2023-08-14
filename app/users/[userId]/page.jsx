"use client";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

const page = ({ params }) => {

  const router = useRouter()

  const { userId } = params;

  const handleBack = () =>{
    router.back()
  }

  const { data, error, isError, isLoading } = useGetUserDetails(userId);

  if (isLoading) {
    return (
      <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return <Typography variant="h6">{error.message}</Typography>;
  }

  const { name, email, city, website, username } = data?.data;

  const abreviation = name.replace(/[a-z]/g, "").replace(/ /, "");

  return (
    <>
    <Typography variant="h6" sx={{fontFamily: "Open Sans", color: "white", textAlign: "center"}}>
      User Details
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 620,
          borderRadius: "26px",
          background: "#333",
          color: "white"
        }}
      >
        <Box>
            <Button onClick={handleBack}>
              <ArrowBackIcon color="error"/>
            </Button>
          </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar  sx={{ width: "60px", height: "60px", marginTop: "4px", background: "#0b1f33" }}>
            {abreviation}
          </Avatar>
        </Box>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{fontFamily: "Open Sans"}}>
            {name}
          </Typography>
          <Typography sx={{mt: "14px", fontFamily: "Open Sans"}}>
           {city}
          </Typography>
          <Typography sx={{mt: "14px", fontFamily: "Open Sans"}}>
           {email}
          </Typography>
          <Typography sx={{mt: "14px", fontFamily: "Open Sans"}}>
            {username}
          </Typography>
          <Typography sx={{mt: "14px", fontFamily: "Open Sans"}}>
            {website}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </>
  );
};

export default page;
