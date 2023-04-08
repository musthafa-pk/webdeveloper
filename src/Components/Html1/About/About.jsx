import React, { useContext, useState } from 'react';
import '../About/About.css';
import { FormContext } from '../../../Context/Context';

export default function About() {
  const { data, setdata } = useContext(FormContext);
  const [isReadMore, setisReadMore] = useState(true);
  const toggleReadMore = () => {
    setisReadMore(!isReadMore);
  }


  return (
    <div>
      <section className="about_section " id='about' style={{ backgroundColor: data.Page2 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box mt-5">
                {data.image2 ? <img src={data.image2} alt="" /> : <img src='/images/aboutimagpng.png' />}
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  {data.menu2 ? <h2>{data.menu2}</h2> : <h2>About</h2>}
                </div>
                {data.pagetext2 ? <p style={{ color: data.pagetextcolor2 }}>{data.pagetext2}</p> : <p style={{ color: data.pagetextcolor2 }}>
                  Based in the land of Zamorins, Kozhikode, Chaavie Solutions is a new age digital services company focussing on helping customers start or chart their digital journey.

                  We are a group of highly motivated professionals, passionate at what we do. Our experience ranges from handling and managing Operations of complex Oil and Gas installations to complex software deliveries, Digital Transformation to Digital marketing.

                  We are living in a fast-paced world where technology and business needs keeps changing by the day. We ensure that the best of the technology is made available to our customers and our agile project management ensures that the solution is never out-dated.
                </p>}
                {/* <button className='more p-2'>Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
