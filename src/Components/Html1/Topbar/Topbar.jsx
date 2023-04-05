import React, { useContext } from 'react';
import './Topbar.css';
import { FormContext } from '../../../Context/Context';

export default function Topbar() {
  const {data,setdata}=useContext(FormContext)

  console.log("data from context",data);
  return (
    <div>
      <div className='col-md-12'>
      <div className='header'>
        <section>
          <div className="row">
            <div className="">
              <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:data.color}}>
                <div className="container-fluid">
                  <div className="col-md-3">
                
                   {data.brandname ?  <div id="logo"><a href="#">{data.brandname}</a></div> : <div id="logo"><a href="#">Brand Name</a></div>}
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
                      <li className="nav-item">
                        {data.menu1 ? <a className="nav-link active" aria-current="page" href="#">{data.menu1}</a> :<a className="nav-link active" aria-current="page" href="#">Home</a> }
                      </li>
                      <li className="nav-item">
                        {data.menu2 ? <a className="nav-link" href="#about">{data.menu2}</a> :  <a className="nav-link" href="#about">About</a>}
                      </li>
                      <li className="nav-item">
                        {data.menu3 ? <a className="nav-link" href="#contact">{data.menu3}</a> : <a className="nav-link" href="#contact">Contact</a>}
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    
  )
}
