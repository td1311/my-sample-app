import { useGetUsersQuery, userApi } from "../../services/user/user"

export function UsersList() {
  const { data, isLoading, isFetching, isError } = useGetUsersQuery(null)

  if (isError) return <div>An error has occurred!</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div className={isFetching ? 'posts--disabled' : ''}>
      {data.data.map((item: any) => (
        <div>{item.email}</div>
      ))}
    </div>
  )
}