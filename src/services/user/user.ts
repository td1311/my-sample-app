import { baseApi } from '../base/baseApi'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page: number) => ({ url: `api/users?page=${page}`, method: 'get' }),
    }),
  }),
})

export const { useGetUsersQuery } = userApi