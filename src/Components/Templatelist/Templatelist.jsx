import React, { Component, useContext, useState } from 'react'
import '../Templatelist/Templatelist.css'
import Html1 from '../Html1/Html1';
import Mainbar from '../Mainbar/Mainbar'
import { Link } from 'react-router-dom';
import Html2 from '../Html2/Html2';
import Html3 from '../Html3/Html3';
import PageNotFound from '../PageNoteFound'
import { PageContext } from '../../Context/Context';

export default function Templatelist() {
    const [temp1,settemp1] = useState(false);
    const [temp2,settemp2] = useState(false);
    const [temp3,settemp3] = useState(false);
    const {selectpage,setselectpage}=useContext(PageContext);
   
    function printer(){
    
        console.log('hai')
        console.log(selectpage)
        console.log(temp1)
    }
    function template1(){
        setselectpage({...selectpage,template1:'one'});
        // setselectpage({template1 :'one'})
        if(temp1 === true){
            
            settemp1(!temp1)
            settemp2(temp2===true)
            settemp3(temp3 === true)
            console.log(temp1)
        }else{
            settemp1(!temp1)
            console.log(temp1)
        }

    }
    console.log(selectpage);
    function template2(){
        setselectpage({template2:'two'})
        
        if(temp2 === true){
            settemp1(temp1 === true)
            settemp2(temp2 === false)
            settemp3(temp3 === true)
            // setselectpage({template2:'two'});
        }else{
            settemp2(temp2===false)
        }

    }
    function template3(){
        
        if(temp3 === true){
            settemp1(temp1);
            settemp2(temp2);
            settemp3(!temp3);
            setselectpage({template3:'three'})
            console.log(temp3)
            
        }else{
            settemp3(!temp3);
            console.log(temp3);
        }   
    }
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
                                    <div className="card" onClick={template1}>
                                        <h4>Chaavie solutions</h4>
                                        { temp1 === true ?<div className="selected">selected</div>: <p></p> }
                                        <img src="/images/webdeveloper1.avif" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick={template2}>
                                        <h4>Portfolio</h4>
                                        { temp2 === true ?<div className="selected">selected</div>: <p></p> }
                                        <img src="./images/932271.jpg" alt="" />
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className="card" onClick={template3}>
                                        <h4>Nature</h4>
                                        { temp3 === true ?<div className="selected">selected</div>: <p></p> }
                                        <img src="https://e1.pxfuel.com/desktop-wallpaper/906/140/desktop-wallpaper-3-lucky-good-luck-charm.jpg" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 side-scroll">
                        <div className="side2">
                            <span className='text-primary'>Choose template</span>
                            <div className="card template_card" id='showone'>
                                
                                {temp1 && <Html1/>}
                                {temp2 && <Html2/>}
                                {temp3 && <Html3/>}                            
                                {/* {temp1  ? <Html1/> : 
                                   <p>Pick a template</p> 
                                 }
                                {temp2 ? <Html2/> : 
                                   <p> Pick a template
                                   </p>        } */}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to ="/studio"><span className='btn btn-success m-1'>Take to Studio </span></Link> 
                            <button className='btn btn-danger' onClick={printer}> Test</button>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}
