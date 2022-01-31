import { LAPTOP, KEYBOARD } from '@/constant/mockData'

const ALL_PRODUCTS = [...LAPTOP, ...KEYBOARD]

export const getByIds = ids => {
  let result = []
  ids.forEach(id => {
    const product = ALL_PRODUCTS.find(p => p.id === id)
    result.push(product)
  })
  return result
}

// export const getById = id => {
//   const product = ALL_PRODUCTS.find(p => p.id === id)
//   return product
// }

export const getById = id => {
  console.log('🚀 ~ file: mockService.js ~ line 20 ~ id', id)
  return new Promise(resolve => {
    const product = ALL_PRODUCTS.find(p => p.id === id)
    resolve(product)
  })
}
