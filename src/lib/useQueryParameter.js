import React from 'react'
import qs from 'qs'
import { useLocation } from 'react-router-dom'

function useQueryParameter() {
  const { search } = useLocation()

  return React.useMemo(
    () => ({ ...qs.parse(search.replace('?', '')) }),
    [search]
  )
}

export default useQueryParameter
