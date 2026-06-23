export default async function MovieDetail({params}){
  const receiveParams = await params;
  const id = receiveParams.id
  const movieDetail = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d455689b`)
  const data = await movieDetail.json()
 if (data.Response=== 'False') {
  return <p>Movie Not Found</p>
}
 const movie = data
 return(
  <div style={{marginTop:'50px', textAlign:'center'}}>
    <div  style={{textAlign:'center',display:'flex', alignItems:'center',gap:'30px',width:'900px',marginLeft:'100px'
    }}>
      <img src={movie.Poster} alt={movie.Title} style={{width:'300px', display:'block',margin:'0 auto'}}/>
      <div style={{textAlign:'left' }}>
      <div style={{fontWeight:'bold', fontSize:'20px'}}>{movie.Title}</div>
      <div style={{display:'flex'}}>
      <div>{movie.Year},</div>
      <div>{movie.Runtime}</div>
      </div>
      <div >{movie.Plot}</div>
      <div>{movie.Director}</div>
      <div>{movie.Actors}</div>
      <div>{movie.Genre}</div>      
<div>{movie.imdbRating}/10</div>  
<div>{movie.Rated}</div>
</div>      
    </div>

  </div>
 )
}