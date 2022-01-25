import React from 'react'
import ConfirmModal from '@/components/modal'
import LoginForm from './LoginForm'

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <ConfirmModal noButton isOpen={isOpen} onClose={onClose}>
      <LoginForm onClose={onClose} />
    </ConfirmModal>
  )
}

export default LoginModal
