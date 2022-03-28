import { baseApi } from '../base/baseApi'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page: number) => ({ url: `api/users?page=${page}`, method: 'GET' }),
    }),
    createUser: builder.mutation({
      query: (data)=> ({ url: `api/users`, method: 'POST', data }),
    })
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = userApi