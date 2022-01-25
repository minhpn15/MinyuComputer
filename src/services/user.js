import request from '@/utils/request'

// client
export const getProfile = async () =>
  request.get('/v3/c4e40fb3-b674-4862-95aa-5323a6ff6087')

// admin
export const getUsers = async () =>
  request.get('/v3/2105d5f1-c302-410f-8d9e-b10f239e98bc')
