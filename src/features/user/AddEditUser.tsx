import { useCreateUserMutation, useGetUserQuery, useGetUsersQuery, User } from '../../services/user/userApi';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { strings } from '../../localization/Localization';

export function AddEditUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<User>()
  const [createUser, createUserResult] = useCreateUserMutation()
  const getUsersResult = useGetUsersQuery(1)

  const addUser = async (data: User) => {
    console.log(data)
    createUser(data)
  }

  if (createUserResult.isLoading) return <div>Loading...</div>

  return (
    <div>
      <p>User List</p>
      {getUsersResult.data?.data.map((item) => (
        <div>{item.first_name}</div>
      ))}
      <form onSubmit={handleSubmit((data) => addUser(data))}>
        <input {...register("name", { required: true })} placeholder={strings.screenAddEditUser.name} />
        <input {...register("job")} placeholder={strings.screenAddEditUser.job} />
        <input type="submit" />
      </form>
    </div>
  )
}