export default async function MovieDetail({params}){
  const receiveParams = await params;
  const id = receiveParams.id
  const movieDetail = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d455689b`)
  const data = await movieDetail.json()
 if (data.Response === 'False') {
  return <p>Movie Not Found</p>
}
 const movie = data
 return(
  <div style={{marginTop:'50px', textAlign:'center'}}>
    <div key={movie.imdbID} style={{textAlign:'center'}}>
      <img src={movie.Poster} alt={movie.Title} style={{width:'300px', display:'block',margin:'0 auto'}}/>
    </div>

  </div>
 )
}