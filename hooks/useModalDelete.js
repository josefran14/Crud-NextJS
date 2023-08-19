import { useState } from "react"

export const useModalDelete = () => {

    const [modal, setModal] = useState(false)
    const [userId, setUserId] = useState(null)
    
    const handleOpenModal = (id) =>{
      setModal(true)
      setUserId(id)
    }
  
    const handleCloseModal = () =>{
      setModal(false)
    }
  
    return {
      modal,
      handleOpenModal,
      handleCloseModal,
      userId
    }
}
