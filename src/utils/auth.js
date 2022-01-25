export const setToken = token => {
  window.localStorage.setItem('token', JSON.stringify(token))
}

export const getToken = () => {
  const token = window.localStorage.getItem('token')
  return token || null
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}
