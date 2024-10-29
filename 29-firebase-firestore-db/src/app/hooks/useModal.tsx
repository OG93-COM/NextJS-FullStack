import { useState } from 'react'
import { ModalType } from '../Types/useTypes'

const useModal = (): ModalType => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const onOpen = () => {
        setOpenModal(true)
    }
    const onClose = () => {
        setOpenModal(false)
    }
    return {openModal, onOpen, onClose}
}

export default useModal