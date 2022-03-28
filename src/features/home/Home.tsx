import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => { navigate('/redux') }}>
        Redux
      </button>
      <button onClick={() => { navigate('/usersList') }}>
        RTK Query
      </button>
      <button onClick={() => { navigate('/addEditUsers') }}>
        RTK Mutation
      </button>
    </div>
  )
}