"use client";
import { UserCard } from "@/components/UserCard";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { Typography } from "@mui/material";

const page = ({ params }) => {

  const { userId } = params;

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

  return (
    <>
    <UserCard data={data}/>
    </>
  );
};

export default page;
