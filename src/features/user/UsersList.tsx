import { useGetUsersQuery, userApi } from "../../services/user/user"

export function UsersList() {
  const { data, isLoading, isFetching, isError } = useGetUsersQuery(2)

  if (isError) return <div>An error has occurred!</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data.data.map((item: any) => (
        <div>{item.email}</div>
      ))}
    </div>
  )
}