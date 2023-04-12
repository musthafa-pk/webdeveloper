import React, { useState,useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import ClipLoader from 'react-spinners/ClipLoader';
export default function Generated() {
    const[loading,setloading] = useState(false)
    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
            setloading(false)
        },3000);
    },[])
  return (
    
    <div>
        {loading ? ( <div className="loader"> <BarLoader height={5} color={'#f37f24'} loading={loading} width={200}/> </div> ):(
            <div className="container">
            <div>
                <h1 className='text-dark'>Your page is Ready to visit</h1>
            </div>
            <div className="card"><span> <a href="https://www.google.com">https:www.google.com</a> </span></div>
            
          </div>
        )}
      
    </div>
  )
}
