'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
   const [search,setSearch] = useState('')
        const router = useRouter()

// navigate to a page
function handleSearch(){
      router.push(`/movies?search=${search}`)
      }
  return (
<div>

  <h1 style={{fontWeight:'bold', fontSize:'30px',marginTop:'20px',textAlign:'center'}}>Movie App</h1>
  <div style={{marginTop:'50px',textAlign:'center',}}>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  className="px-6 py-3 text-base placeholder:text-xl" placeholder="Enter a movie name"/>
    <button onClick={handleSearch} style={{border:'1px solid black',width:'90px',marginLeft:'20px',borderRadius:'5px'}}>Search</button>

  </div>
</div>
  );
}
