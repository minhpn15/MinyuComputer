import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import pickBy from 'lodash.pickby'
import qs from 'qs'
import useQueryParameter from './useQueryParameter'

const useReflectionSearchParams = initialValues => {
  const navigate = useNavigate()
  const urlParams = useQueryParameter()

  const isValidParams = v => v !== '' && v !== null && v !== undefined

  const searchParams = useMemo(() => {
    return {
      ...initialValues,
      ...urlParams
    }
  }, [initialValues, urlParams])

  const setSearchParams = useCallback(
    params => {
      navigate({
        search: qs.stringify(
          pickBy({ ...searchParams, ...params }, isValidParams)
        )
      })
    },
    [navigate, searchParams]
  )

  return [searchParams, setSearchParams]
}

export default useReflectionSearchParams
