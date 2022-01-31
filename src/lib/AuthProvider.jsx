import React, {
  createContext,
  useMemo,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { getToken, removeToken } from '@/utils/auth'
import { getProfile } from '@/services/user'
import { PageLoading } from '@/components'
import { useStore } from '@/lib/StoreProvider'
import useToast from './useToast'

export const AuthContext = createContext()
const ADMIN = 'admin'

export default ({ children }) => {
  const toast = useToast()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const token = getToken()
  const {
    // TODO: update me
    // data: profile,
    remove,
    isLoading
  } = useQuery('profile', getProfile, {
    enabled: !!token
  })
  const { profile, setProfile, removeProfile } = useStore(state => {
    const { profile, setProfile, removeProfile } = state
    return { profile, setProfile, removeProfile }
  })
  // TODO
  // if get profile fail =>  show popup

  // TODO: cheat
  useEffect(() => {
    const { role } = profile || {}
    if (role === 'admin') navigate('/admin/products')
  }, [profile])

  const logout = useCallback(() => {
    remove()
    queryClient.removeQueries('profile')
    removeToken()
    removeProfile()
    toast({ message: 'Đã đăng xuất' })
  }, [remove, queryClient])

  const login = useCallback(p => {
    setProfile({ ...p, role: p.password === ADMIN ? ADMIN : 'client' })
    toast({ message: 'Đăng nhập thành công' })
  }, [])

  const contextValue = useMemo(
    () => ({
      profile,
      logout,
      login,
      isLoading,
      isLogged: !!profile
    }),
    [profile, login, logout, isLoading]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading && <PageLoading />}
      {!isLoading && children}
    </AuthContext.Provider>
  )
}
