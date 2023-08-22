import { useDeleteUser } from "@/hooks/useDeleteUser";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { Box, Button, Modal, Typography } from "@mui/material";

export const ModalDeleteUser = ({ modal, handleCloseModal, userId}) => {

    const {mutate: deleteUser} = useDeleteUser()
    const {data} = useGetUserDetails(userId)

    const handleDelete = () =>{
        deleteUser(userId)
        handleCloseModal()
    }
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minWidth: 450,
      bgcolor: "#333",
      color: "white",
      boxShadow: 24,
      p: 4,
      borderRadius: "20px"
    };
  
    return (
      <>
        <div>
          <Modal
            open={modal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{...style}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  ¿Estas seguro que deseas eliminar el usuario {data?.data.name}?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "80px",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    color="error"
                    variant="contained"
                    onClick={handleDelete}
                    sx={{borderRadius: "12px"}}
                  >
                    Si
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleCloseModal}
                    sx={{borderRadius: "12px"}}
                  >
                    No
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </div>
      </>
    );
  }