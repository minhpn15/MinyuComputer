import request from '@/utils/request'

// client
export const getProducts = async () =>
  request.get('/v3/31492116-fe37-4868-8648-d4dd1e34891e')
// https://run.mocky.io/v3/31492116-fe37-4868-8648-d4dd1e34891e

export const getProductbyId = async () =>
  request.get('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')

// admin
export const addProduct = async () =>
  request.post('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')

export const deleteProduct = async () =>
  request.delete('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')
