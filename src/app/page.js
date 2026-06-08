'use client'
import Image from "next/image";

export default function Home() {
  return (
<div>
  <h1>Movie App</h1>
  <div style={{marginTop:'50px',textAlign:'center',}}>
    <input type="text" placeholder="Enter a movie name"/>
    <button style={{border:'1px solid black',width:'70px',marginLeft:'20px',borderRadius:'5px'}}>Search</button>
  </div>
</div>
  );
}
