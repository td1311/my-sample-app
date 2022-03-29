import { useEffect, useState } from "react"
import { useGetUsersQuery, userApi } from "../../services/user/userApi"

export function UsersList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, isError, refetch } = useGetUsersQuery(page)

  useEffect(() => {
    refetch()
  }, [page])

  if (isError) return <div>An error has occurred!</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data?.data.map((item) => (
        <div>{item.email}</div>
      ))}
      <button onClick={() => { setPage(1) }}>
        Page 1
      </button>
      <button onClick={() => { setPage(2) }}>
        Page 2
      </button>
    </div>
  )
}