import React, { createContext, useMemo, useCallback } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { getToken, removeToken } from '@/utils/auth'
import { getProfile } from '@/services/user'
// import { PageLoading } from '@/components'

export const AuthContext = createContext()

export default ({ children }) => {
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
      isLoading
    }),
    [profile, logout, isLoading]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
