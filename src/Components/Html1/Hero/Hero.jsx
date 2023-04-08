import React, { useContext } from 'react'
import { FormContext } from '../../../Context/Context'
import '../Hero/Hero.css'


export default function Hero() {
    const { data, setdata } = useContext(FormContext);
    return (
        // <div className=" container hero-area">
        //     <div className="container  pt-3" style={{backgroundColor:data.Hero}}>
        //         <div className="row pt-2 hero-main">
        //             <div className="col-md-6 hero1">
        //                 {data.pagetext1 ? <h1 className='text-dark'>{data.pagetext1}</h1> : <h1 className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quod adipisci itaque ullam ex dolore! Quam illo ut iure voluptatibus accusantium quae optio exercitationem quidem magni maxime! A, eum et.</h1>}
        //             </div>
        //             <div className="col-md-6 hero2">
        //                 <div className="img-box">
        //                 </div>
        //                 {data.image1 ? <img src={data.image1} alt="" className='hero2-image' />:<img className='hero2-image' 
        //                 src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1679545777~exp=1679546377~hmac=dc19a664ecc568388090c0c24bf7b2a06d32ccfb4940251a912eca3e5bfcf723"
        //                 alt="image"  width="100%" />}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='hero-body'>
            <div className="container" style={{ backgroundColor: data.Hero }}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="heading">
                           <span className='hero-heading'> SmartMoves,Smart People,Smart Solutions. </span>   
                        </div>
                        <div className="hero-text-box">
                            {data.pagetext1 ? <p style={{ color: data.pagetextcolor1 }}>{data.pagetext1}</p> : <p className='hero-text' style={{ color: data.pagetextcolor1 }}>At Chaavie, our focus is always the success of our customer. With Digital being the new buzz and the way of business, we can help you navigate the digital cross winds and chart your way to success. Our way of business is built on trust, innovation and delivering the best value to our customers.</p>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-wrap">
                            {data.image1 ? <img src={data.image1} alt="" /> : <img src="/images/kindpng.png" alt="" />}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
