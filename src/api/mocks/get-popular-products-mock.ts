import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Calabresa', amount: 12 },
    { product: 'Portuguesa', amount: 14 },
    { product: 'Marguerita', amount: 9 },
    { product: 'Lombo', amount: 11 },
    { product: 'Frango c/ Catupiry', amount: 24 },
    { product: 'Pepperoni', amount: 12 },
    { product: 'Mussarela', amount: 16 },
  ])
})
