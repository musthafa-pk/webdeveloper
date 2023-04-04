import React, { useState } from 'react';
import '../About/About.css';

export default function About(props) {
  const [isReadMore,setisReadMore]= useState(true);
  const toggleReadMore =()=>{
    setisReadMore(!isReadMore);
  }
  
  
  return (
    <div>
        <section className="about_section " id='about'>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            {props.data.image2 ? <img src={props.data.image2} alt="" /> : <img src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1679472376~exp=1679472976~hmac=f9c348f14e08b05a429f502617a3fac6d8e3b4e4db42ff3e20b8847dc6abf448'/>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
                {props.data.menu2 ? <h2>{props.data.menu2}</h2> : <h2>About</h2> }
            </div>
             {props.data.pagetext2 ?   <p>{props.data.pagetext2}</p>:<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>}
            {/* <p id='Readmore'>
            &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit, rerum repellat perspiciatis molestias expedita? Obcaecati eaque, 
            repudiandae laborum odit ex dolore possimus adipisci nesciunt totam ad asperiores, magni numquam?&quot;
            </p> */}
            {/* <button className='more p-2'>Read More</button> */}
          </div>
        </div>
      </div>
    </div>
  </section>

      
    </div>
  )
}
