import React from 'react'
import ConfirmModal from '@/components/modal'
import LoginForm from './LoginForm'

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <ConfirmModal noButton isOpen={isOpen} onClose={onClose}>
      <LoginForm />
      {/* <span>sadfasf</span> */}
    </ConfirmModal>
  )
}

export default LoginModal
