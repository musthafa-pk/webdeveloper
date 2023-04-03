import React from 'react';
import './Topbar.css';

export default function Topbar() {
  return (
    <div>
      <div className='col-md-12'>
      <div className='header'>
        <section>
          <div className="row">
            <div className="">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <div className="col-md-3">
                    <div id="logo"><a href="#">Brand Name</a></div>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
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