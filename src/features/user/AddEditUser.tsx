import { useCreateUserMutation } from '../../services/user/user';
import { useForm } from 'react-hook-form';

export function AddEditUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [createUser, { isLoading }] = useCreateUserMutation()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
        createUser(data).unwrap()
      })}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("job")} placeholder="Job" />
        <input type="submit" />
      </form>
    </div>
  )
}