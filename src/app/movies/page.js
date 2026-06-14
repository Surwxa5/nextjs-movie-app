
// Imports useSearchParams from Next.js. This specific built-in hook lets you read the text after the ? in the current web address.
export default async function movies({ searchParams }){
    const useparams = await searchParams;
    const query = useparams.search || 'batman';

  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=d455689b`)
  const data = await res.json()


  return(
    <div>
      <h1 style={{fontSize:'30px', margin:'30px', fontWeight:'bold', padding:'20px'}}> 
        Movies:{query}
      </h1>

      <div style={{display:'flex', flexWrap:'wrap',marginTop:'30px', justifyContent:'center',gap:'20px'}}>
      {data.Search?.map((movie)=>(
        <div key={movie.imdbID}>
          {/* for image poster */}
          <img
             src={movie.Poster}
             width={150}
             alt={movie.Title}
             style={{ borderRadius: '8px', objectFit: 'cover' }}
             height={220}
               />

         <p style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '14px' }}>{movie.Title}</p>
         <p style={{ fontSize: '12px', color: 'gray' }}>{movie.Year}</p>
        </div>
      ))} 
     </div>
    </div>
  )
}