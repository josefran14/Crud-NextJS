import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const UserCard = ({ data }) => {
  const router = useRouter();

  const { name, email, city, website, username } = data?.data;

  const abreviation = name.replace(/[a-z]/g, "").replace(/ /, "");

  const handleBack = () => {
    router.back();
  };

  return (
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
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "6px",
          }}
        >
          <Box sx={{ width: "26%", alignItems: "center", marginLeft: "4px" }}>
            <Button onClick={handleBack}>
              <ArrowBackIcon color="error" />
            </Button>
          </Box>
          <Typography variant="h6" sx={{ color: "white", width: "74%" }}>
            Details of the user {data?.data.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            sx={{
              width: "60px",
              height: "60px",
              marginTop: "10px",
              background: "#0b1f33",
            }}
          >
            {abreviation}
          </Avatar>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ display: "flex", gap: "6px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
            {name}
          </Typography>
          <Typography sx={{ mt: "14px", display: "flex", gap: "6px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Gender:</Typography> {city}
          </Typography>
          <Typography sx={{ mt: "14px", display: "flex", gap: "6px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Email:</Typography> {email}
          </Typography>
          <Typography sx={{ mt: "14px", display: "flex", gap: "6px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Username:</Typography>{" "}
            {username}
          </Typography>
          <Typography sx={{ mt: "14px", display: "flex", gap: "6px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Website:</Typography>{" "}
            {website}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
