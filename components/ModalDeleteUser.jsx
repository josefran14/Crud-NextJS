import { useDeleteUser } from "@/hooks/useDeleteUser";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { Box, Button, Modal, Typography } from "@mui/material";

export const ModalDeleteUser = ({ modal, handleCloseModal, userId}) => {

    const {mutate: deleteUser} = useDeleteUser()

    const {data: user} = useGetUserDetails(userId)

    const handleDelete = () =>{
        deleteUser(userId)
        handleCloseModal()
    }
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
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
                  ¿Estas seguro que deseas eliminar el usuario {user?.data.name}?
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
                  >
                    Si
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleCloseModal}
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