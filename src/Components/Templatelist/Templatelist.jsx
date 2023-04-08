import React, { Component, useState } from 'react'
import '../Templatelist/Templatelist.css'
import Html1 from '../Html1/Html1';
import Mainbar from '../Mainbar/Mainbar'

export default function Templatelist() {
    const [isTapped,setisTapped] = useState(false);
    
    return (
        
        <div>
            <div className="row">
                <Mainbar/>
            </div>
            <div className="" >
                <div className="row">
                    <div className="col-md-3 side-scroll">
                        <div className="">
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <div className="card" onClick={()=>setisTapped(!isTapped)}>
                                        <h4>Template 1</h4>
                                        <img src="/images/webdeveloper1.avif" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick={()=>setisTapped(!isTapped)}>
                                        <h4>Template 2</h4>
                                        <img src="https://images.pexels.com/photos/177154/pexels-photo-177154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick="">
                                        <h4>Template 3</h4>
                                        <img src="https://e1.pxfuel.com/desktop-wallpaper/906/140/desktop-wallpaper-3-lucky-good-luck-charm.jpg" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 side-scroll">
                        <div className="side2">
                            <div className="card" id='showone'>
                                {/* {isTapped && <Html1/>} */}
                                {isTapped ? <Html1/> : <div className="card">
                                    Pick a template
                                </div> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
