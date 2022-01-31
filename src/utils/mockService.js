import { LAPTOP, KEYBOARD } from '@/constant/mockData'

const ALL_PRODUCTS = [...LAPTOP, ...KEYBOARD]

export const getByIds = ids => {
  return new Promise(resolve => {
    let result = []
    ids.forEach(id => {
      const product = ALL_PRODUCTS.find(p => p.id === id)
      result.push(product)
    })
    resolve(result)
  })
}

export const getById = id => {
  return new Promise(resolve => {
    const product = ALL_PRODUCTS.find(p => p.id === id)
    resolve(product)
  })
}

export const findByName = name => {
  const filter = (name || '').toLocaleLowerCase()
  return new Promise(resolve => {
    const products = ALL_PRODUCTS.filter(p => {
      const productName = (p?.name || '').toLocaleLowerCase()
      return productName.includes(filter)
    })
    resolve(products)
  })
}
