import React, { createContext, useMemo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { getToken, removeToken } from '@/utils/auth'
import { getProfile } from '@/services/user'
import { PageLoading } from '@/components'

export const AuthContext = createContext()

export default ({ children }) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const token = getToken()
  const {
    data: profile,
    remove,
    isLoading
  } = useQuery('profile', getProfile, {
    enabled: !!token
  })

  // TODO
  // if get profile fail =>  show popup

  // TODO
  // useEffect(() => {
  //   const { role } = profile || {}
  //   if (role === 'admin') navigate('/admin/products')
  // }, [profile])

  const logout = useCallback(() => {
    remove()
    queryClient.removeQueries('profile')
    removeToken()
    // cb && cb()
  }, [remove, queryClient])

  const contextValue = useMemo(
    () => ({
      profile,
      logout,
      isLoading,
      isLogged: !!profile
    }),
    [profile, logout, isLoading]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading && <PageLoading />}
      {!isLoading && children}
    </AuthContext.Provider>
  )
}
