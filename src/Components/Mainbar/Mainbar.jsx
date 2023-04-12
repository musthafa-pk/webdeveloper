import React from 'react'
import { Link } from 'react-router-dom'
export default function Mainbar() {
  return (
    <div>
      <div className=' col-md-12 p-0'>
            
            <nav className='navbar' style={{backgroundColor:'black'}}>
                <div className='navbar nav-item'>
                    <span className='Brand'>Chaavie Solutions</span>
                </div>
                <div className="navbar nav-item display-flex justify-content-end">
                    <Link to="/"><span className='text-white px-2'>Logout</span></Link>
                </div>
            </nav>
            
        </div>
    </div>
  )
}
