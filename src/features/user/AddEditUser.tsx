import { useCreateUserMutation, useGetUserQuery, useGetUsersQuery, User } from '../../services/user/userApi';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export function AddEditUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<User>()
  const [createUser, create] = useCreateUserMutation()
  const users = useGetUsersQuery(1)

  const addUser = async (data: User) => {
    console.log(data)
    createUser(data)
  }

  if (create.isLoading) return <div>Loading...</div>

  return (
    <div>
      <p>User List</p>
      {users.data?.data.map((item) => (
        <div>{item.first_name}</div>
      ))}
      <form onSubmit={handleSubmit((data) => addUser(data))}>
        <input {...register("name")} placeholder="Name" value="name"/>
        <input {...register("job")} placeholder="Job" value="job"/>
        <input type="submit" />
      </form>
    </div>
  )
}