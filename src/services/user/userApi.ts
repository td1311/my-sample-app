import { baseApi } from '../base/baseApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  name: string,
  job: string
}

export interface GetUsersResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: GetUserResponse[]
}

export interface GetUserResponse {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface CreateUserResponse {
  id: string,
  name: string,
  job: string,
  createdAt: string
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, number>({
      query: (page: number) => ({ url: `api/users?page=${page}`, method: 'GET' }),
      providesTags: (result, error, id) => [{ type: 'User', id: 'LIST' }],
    }),
    getUser: builder.query<GetUserResponse, number>({
      query: (id: number) => ({ url: `api/users/${id}`, method: 'GET' }),
      providesTags: (result, error, id) => [{ type: 'User', id: id }],
    }),
    createUser: builder.mutation<CreateUserResponse, User>({
      query: (data: User) => ({ url: `api/users`, method: 'POST', data }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }]
    })
  }),
})

export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation } = userApi