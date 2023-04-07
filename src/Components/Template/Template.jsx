import React from 'react'
import Html1 from '../Html1/Html1'

export default function Template() {
    return (
        <div className=' col-md-12 p-0'>
            <div className="row px-0">
            <nav className='navbar bg-dark display-flex justify-content-end p-2'>
                <div className="navbar nav-item">
                    <span className='text-white'>Logout</span>
                </div>
            </nav>
            </div>
            <div className="row">
                <Html1/>
            </div>

        </div>
    )
}
