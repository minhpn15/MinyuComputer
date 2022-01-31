import {
  LAPTOP,
  KEYBOARD,
  MOUSE,
  HEADPHONE,
  MAINBOARD,
  CPU,
  SSD,
  VGA,
  RAM,
  MONITOR,
  CASE,
  PSU
} from '@/constant/mockData'

const ALL_PRODUCTS = [
  ...LAPTOP,
  ...KEYBOARD,
  ...MOUSE,
  ...HEADPHONE,
  ...MAINBOARD,
  ...CPU,
  ...SSD,
  ...VGA,
  ...RAM,
  ...MONITOR,
  ...CASE,
  ...PSU
]

const PRODUCTS = {
  LAPTOP,
  KEYBOARD,
  MOUSE,
  HEADPHONE,
  MAINBOARD,
  CPU,
  SSD,
  VGA,
  RAM,
  MONITOR,
  CASE,
  PSU
}

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

export const findProduct = filterData => {
  const { filter: name, type, brand } = filterData || {}

  if (type) {
    return new Promise(resolve => {
      const products = PRODUCTS[type].filter(p => p.brand === brand)
      resolve(products)
    })
  }

  const filter = (name || '').toLocaleLowerCase()
  return new Promise(resolve => {
    const products = ALL_PRODUCTS.filter(p => {
      const productName = (p?.name || '').toLocaleLowerCase()
      return productName.includes(filter)
    })
    resolve(products)
  })
}
