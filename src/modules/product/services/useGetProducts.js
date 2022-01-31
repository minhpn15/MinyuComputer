import { useQuery } from 'react-query'
import request from '@/utils/request'
import { makeQuerykey } from '@/utils/common'
import { findProduct } from '@/utils/mockService'

const useGetProducts = (params, queryOptions = {}) =>
  useQuery(
    makeQuerykey('product', params),
    async () =>
      // request.get('/v3/31492116-fe37-4868-8648-d4dd1e34891e', { params }),
      findProduct(params),
    { enabled: true, ...queryOptions }
  )

export default useGetProducts
