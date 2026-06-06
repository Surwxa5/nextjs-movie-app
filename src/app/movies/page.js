export default async function movies(){
  const res = await fetch('https://www.omdbapi.com/?s=batman&apikey=d455689b')
  const data = await res.json()

  return(
    <div>
      <h1>
        Movies
      </h1>
      {data.search.map((movie)=>(
        <div key={movie.imdbID}>
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  )
}