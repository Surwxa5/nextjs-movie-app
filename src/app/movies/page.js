import { useSearchParams } from "next/navigation";
// Imports useSearchParams from Next.js Imports useSearchParams from Next.js. This specific built-in hook lets you read the text after the ? in the current web address.
export default async function movies({ searchParams }){
  const res = await fetch('https://www.omdbapi.com/?s=batman&apikey=d455689b')
  const data = await res.json()

  const useparams = useSearchParams()
        const Search = useparams.get('search')
  return(
    <div>
      {/* <h1>
        Movies
      </h1>
      {data.search.map((movie)=>(
        <div key={movie.imdbID}>
          <p>{movie.Title}</p>
        </div>
      ))} */}
    </div>
  )
}