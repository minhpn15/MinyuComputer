import { useToast } from '@chakra-ui/react'

// status: "info" | "warning" | "success" | "error"
function useAppToast() {
  const toast = useToast()
  const showToast = ({ title, message, status = 'success' } = {}) => {
    toast({
      title: title || '',
      description: message || '',
      status,
      duration: 3000,
      isClosable: true
    })
  }
  return showToast
}

export default useAppToast
