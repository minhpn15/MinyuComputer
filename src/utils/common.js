export const makeQuerykey = (args = [], params = {}) => [
  ...args,
  Object.values(params)
]
