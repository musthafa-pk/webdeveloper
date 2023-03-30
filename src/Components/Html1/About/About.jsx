import React from 'react';
import '../About/About.css';

export default function About() {
  return (
    <div>
        <section className="about_section " id='about'>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1679472376~exp=1679472976~hmac=f9c348f14e08b05a429f502617a3fac6d8e3b4e4db42ff3e20b8847dc6abf448'></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About
                
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <p id='Readmore'>
            &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit, rerum repellat perspiciatis molestias expedita? Obcaecati eaque, 
            repudiandae laborum odit ex dolore possimus adipisci nesciunt totam ad asperiores, magni numquam?&quot;
            </p>
            <button className='more p-2'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  </section>

      
    </div>
  )
}
