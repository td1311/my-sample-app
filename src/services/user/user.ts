import { createEntityAdapter } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userAdapter = createEntityAdapter()

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'api/users',
    }),
    
  }),
})

export const { useGetUsersQuery } = userApi