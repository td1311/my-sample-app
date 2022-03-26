import { useGetPokemonByNameQuery } from "../../services/pokemon/pokemon"


export function Pokemon() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <p>{data.id}</p>
          <p>{data.name}</p>
        </>
      ) : null}
    </div>
  )
}