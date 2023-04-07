import React, { Component, useState } from 'react'
import '../Templatelist/Templatelist.css'

export default function Templatelist() {
    const [temp,settemp] = useState(false);
    
    return (
        <div>
            <div className="row">
                <h3>Choose Your Template</h3>
            </div>
            <div className="" >
                <div className="row">
                    <div className="col-md-3">
                        <div className="">
                        
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <div className="card" onClick="">
                                        <h4>Classic</h4>
                                        <img src="/images/webdeveloper1.avif" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick="">
                                        <h4>Vintage</h4>
                                        <img src="https://images.pexels.com/photos/177154/pexels-photo-177154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick="">
                                        <h4>Charm</h4>
                                        <img src="https://e1.pxfuel.com/desktop-wallpaper/906/140/desktop-wallpaper-3-lucky-good-luck-charm.jpg" alt="" />
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="side2">
                        
                            <div className="card">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
