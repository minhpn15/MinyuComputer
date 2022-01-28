import { Outlet } from 'react-router-dom'
import AuthProvider from '@/lib/AuthProvider'

const AuthLayout = ({ children }) => {
  return (
    <AuthProvider>
      {children}
      <Outlet />
    </AuthProvider>
  )
}

export default AuthLayout
