import { http, HttpResponse } from 'msw'

import { GetDailyRavenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRavenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/02/2024', receipt: 245 },
    { date: '02/02/2024', receipt: 345 },
    { date: '03/02/2024', receipt: 765 },
    { date: '04/02/2024', receipt: 432 },
    { date: '05/02/2024', receipt: 1343 },
    { date: '06/02/2024', receipt: 1675 },
    { date: '07/02/2024', receipt: 986 },
  ])
})
