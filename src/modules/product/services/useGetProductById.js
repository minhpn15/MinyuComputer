import { useQuery } from 'react-query'
import request from '@/utils/request'
import { makeQuerykey } from '@/utils/common'
import { getById } from '@/utils/mockService'

const useGetProductById = (params, queryOptions = {}) =>
  useQuery(
    makeQuerykey('productById', params),
    async () =>
      // request.get('/v3/31492116-fe37-4868-8648-d4dd1e34891e', { params }),
      getById(params),
    { enabled: true, ...queryOptions }
  )

export default useGetProductById
