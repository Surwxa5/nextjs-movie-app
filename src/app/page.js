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
<div style={{minHeight:'100vh',background: 'linear-gradient(135deg, #001f3f 0%, #0a4f6e 50%, #00c9b1 100%)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px'}}>

  <h1 style={{fontWeight:'bold', fontSize:'48px',marginTop:'20px',textAlign:'center',color:'#fff',letterSpacing:'2px',textShadow:'0 4px 12px rgba(0, 0,0,0.4)'}}>Movie App</h1>
  <div style={{marginTop:'50px',textAlign:'center'}}>

 
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  className="px-6 py-3 text-base placeholder:text-xl" placeholder="Enter a movie name" style={{  border: 'none',
        outline: 'none',
        borderRadius: '50px',
        width: '300px',
        background: '#fff',
        fontSize: '16px'}}/>
    <button onClick={handleSearch} style={{border:'1px solid white',width:'90px',marginLeft:'20px', color: '#fff',
        width:'110px',
        marginLeft:'15px',
        borderRadius:'50px',
        padding: '12px 0',
        background: 'linear-gradient(135deg, #00c9b1, #007991)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,201,177,0.5)',
        transition: 'transform 0.2s ease', cursor: 'pointer',}}>Search</button>
    </div>
  </div>

  );
}
