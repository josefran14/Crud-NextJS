"use client";
import { Loading } from "@/components/UI/Loading";
import { UserCard } from "@/components/UserCard";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";

const page = ({ params }) => {

  const { userId } = params;

  const { data, error, isError, isLoading } = useGetUserDetails(userId);

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <Error error={error}/>
  }

  return (
    <>
    <UserCard data={data}/>
    </>
  );
};

export default page;
