import currencyFormatter from 'currency-formatter'

export const makeQuerykey = (args = [], params = {}) => [
  ...args,
  Object.values(params)
]

export const formatCurrency = number => {
  return currencyFormatter.format(number, {
    locale: 'de-DE',
    code: 'VND'
  })
}
