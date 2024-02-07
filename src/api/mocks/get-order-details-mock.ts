import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '19912345678',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 12397,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 4299,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 3799,
        product: { name: 'Pizza Calabresa' },
        quantity: 1,
      },
    ],
  })
})
