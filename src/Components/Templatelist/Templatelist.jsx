import React, { Component, useState } from 'react'
import '../Templatelist/Templatelist.css'
import Html1 from '../Html1/Html1';
import Mainbar from '../Mainbar/Mainbar'
import { Link } from 'react-router-dom';
import Html2 from '../Html2/Html2';

export default function Templatelist() {
    const [temp1,settemp1] = useState(false);
    const [temp2,settemp2] = useState(false);
    const [temp3,settemp3] = useState(false);
    
    
    return (
        
        <div>
            <div className="row">
                <Mainbar/>
            </div>
                <div className="row">
                    <div className="col-md-3 side-scroll">
                        <div className="">
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <div className="card" onClick={()=>settemp1(!temp1)}>
                                        <h4>Chaavie solutions</h4>
                                        <img src="/images/webdeveloper1.avif" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick={()=>settemp2(!temp2 )}>
                                        <h4>Portfolio</h4>
                                        <img src="https://images.pexels.com/photos/177154/pexels-photo-177154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick="">
                                        <h4>Nature Builders</h4>
                                        <img src="https://e1.pxfuel.com/desktop-wallpaper/906/140/desktop-wallpaper-3-lucky-good-luck-charm.jpg" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 side-scroll">
                        <div className="side2">
                            <div className="card" id='showone'>

                                
                                {temp1 && <Html1/>}
                                {temp2 && <Html2/>}

                                {/* {isTapped  ? <Html1/> : 
                                   <p>Pick a template</p> 
                                 }
                                {temp2 ? <Html2/> : 
                                   <p> Pick a template
                                   </p>        } */}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to ="/studio"><span className='btn btn-success m-1'>Take to Studio </span></Link> 
                        </div>
                    </div>
                </div>
        </div>
    )
}
