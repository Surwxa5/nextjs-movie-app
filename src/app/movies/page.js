
// Imports useSearchParams from Next.js Imports useSearchParams from Next.js. This specific built-in hook lets you read the text after the ? in the current web address.
export default async function movies({ searchParams }){
    const useparams = await searchParams;
    const query = useparams.search || 'batman';

  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=d455689b`)
  const data = await res.json()


  return(
    <div>
      <h1>
        Movies:{query}
      </h1>
      <ul>
      {data.Search?.map((movie)=>(
        
        <li key={movie.imdbID}>
        
          {movie.Title} ({movie.Year})
        </li>
      ))} 
      </ul>
    </div>
  )
}