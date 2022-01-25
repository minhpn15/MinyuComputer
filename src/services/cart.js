import request from '@/utils/request'

// client
export const addCart = async () =>
  request.post('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')

export const editCart = async () =>
  request.put('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')

export const removeCart = async () =>
  request.delete('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')
