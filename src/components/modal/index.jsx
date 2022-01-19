import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react'

const ConfirmModal = ({
  children,
  isOpen,
  onClose,
  onAccept,
  title,
  acceptText,
  noButton = false
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {!noButton && (
          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="cyan"
              mr={3}
              onClick={() => onClose()}
            >
              Đóng
            </Button>
            <Button colorScheme="cyan" color="white" onClick={() => onAccept()}>
              {acceptText}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
