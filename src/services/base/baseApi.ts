import { axiosBaseQuery } from './axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://reqres.in/' }),
  endpoints: () => ({}),
})