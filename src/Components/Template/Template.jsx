import React from 'react'
import Html1 from '../Html1/Html1'

export default function Template() {
    return (
        <div>
            <div className="row">
            <nav className='navbar bg-warning d-flex justify-content-end p-2'>
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
