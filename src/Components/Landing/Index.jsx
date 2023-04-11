import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{ fontWeight: 'bold', }}>Chaavie Solutions</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-warning"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <a class="nav-link active text-dark" aria-current="page" href="#secone">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#sectwo">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#secthree">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id='secone'>
                <div className="section-one" id=''>
                    <div className="row">
                        <img className='section-one' src="/images/papper.jpg" alt="" width='100' />
                    </div>
                    <div className="top-left">
                        <span className='text1'>Build your site..</span><br />
                        <span className='text1'>With Us...</span>
                    </div>
                    <div className="top-right ">
                        <span className='ball'>1</span> <span>Choose template</span>&nbsp;
                        <span className='ball'>2</span> <span>Take to Studio</span>&nbsp;
                        <span className='ball'>3</span> <span>Edit Your Template</span>&nbsp;
                        <span className='ball'>4</span> <span>Preview your site</span>&nbsp;
                        <span className='ball'>5</span> <span>Generate your site</span>&nbsp;
                    </div>
                    <Link to="/templates">
                        <div className='started'>
                            getting started
                        </div>
                    </Link>
                </div>
            </section>

            <section id='sectwo'>
                <div className="section-two">
                    <div className="container pt-5">
                        <div className="row bal">
                            <h1 className='mt-5'>About</h1>
                            <div className="col-md-6 ">
                                <p>Based in the land of Zamorins, Kozhikode, Chaavie Solutions is a new age digital services company focussing on helping customers start or chart their digital journey. We are a group of highly motivated professionals, passionate at what we do. Our experience ranges from handling and managing Operations of complex Oil and Gas installations to complex software deliveries, Digital Transformation to Digital marketing. We are living in a fast-paced world where technology and business needs keeps changing by the day. We ensure that the best of the technology is made available to our customers and our agile project management ensures that the solution is never out-dated.</p>
                            </div>
                            <div className="col-md-6"></div>
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6 p-3">
                                    At Chaavie, our focus is always the success of our customer. With Digital being the new buzz and the way of business, we can help you navigate the digital cross winds and chart your way to success. Our way of business is built on trust, innovation and delivering the best value to our customers.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section id='secthree'>
                <div className="section-three">
                    <div className="container sec-three">
                        <h1 className='d-flex justify-content-center pt-5'>Contact us</h1>

                        chaavie solutions
                        At Chaavie, our focus is always the success of our customer. With Digital being the new buzz and the way of business, we can help you navigate the digital cross winds and chart your way to success.
                        Contact
                        Kottaram Cross Rd, Shasthri Nagar Colony, East Nadakkave
                        Kozhikode, Kerala 673006

                        contact@chaaviesolutions.com

                        +918086730010

                    </div>
                </div>

            </section>

            <div className="sec-footer">
                <span className='d-flex justify-content-center'>2023 Alright reserved by chaavie solutions</span>
            </div>
        </div>
    )
}
