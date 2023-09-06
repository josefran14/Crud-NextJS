"use client";
import { AddUserButton } from "@/components/AddUserButton";
import { ModalDeleteUser } from "@/components/ModalDeleteUser";
import { TableUsers } from "@/components/TableUsers";
import { Error } from "@/components/UI/Error";
import { Loading } from "@/components/UI/Loading";
import { useGetUsers } from "@/hooks/useGetUsers";
import { useModalDelete } from "@/hooks/useModalDelete";
import { Typography } from "@mui/material";

const page = () => {
  const { data, error, isError, isLoading } = useGetUsers();

  const { modal, handleOpenModal, handleCloseModal, userId } = useModalDelete();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: "white", marginTop: "12px" }}
      >
        Users Table
      </Typography>

      <AddUserButton />

      <ModalDeleteUser modal={modal} handleCloseModal={handleCloseModal} userId={userId}/>

      <TableUsers data={data} handleOpenModal={handleOpenModal}/>
    </>
  );
};

export default page;
