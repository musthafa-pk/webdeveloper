import React, { useContext } from 'react'
import './Html2.css'
import { FormContext } from '../../Context/Context'

export default function Html2() {
  // const {form2,setform2}=useContext(FormContext)
  const {data,setdata}=useContext(FormContext)

  return (
    <div id='template2'>
      <nav class="navbar navbar-default navbar " style={{backgroundColor:data.color}}>
        <div class="container-fluid">
          <div class="navbar-header">
            {data.brandname?<a class="navbar-brand" href="#" style={{color:data.textcolor1}}>{data.brandname}</a>:<a class="navbar-brand" href="#" style={{color:data.textcolor1}}>Logo</a>}
          </div>
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-primary"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
                  <li className="nav-item">
                    {data.menu1 ? <a className="nav-link " href="#home">{data.menu1}</a> :<a className="nav-link " href="#home">Home</a>}</li>
                  <li className="nav-item">
                    {data.menu2 ?  <a className="nav-link " href="#about">{data.menu2}</a> :<a className="nav-link " href="#about">About</a>} </li>
                  <li className="nav-item">
                    {data.menu3 ? <a className="nav-link" href="#contact">{data.menu3}</a>:<a className="nav-link" href="#contact">Contact</a>}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </nav>
      <div class="page-landing text-center">
        <div>
        <div className="center_item">
            {data.herotext ?<h1 style={{color:data.herotextcolor}}>{data.herotext}</h1>:<h1 style={{color:data.herotextcolor}}>Hey,</h1>}
            {data.pagetext1?<h3 style={{color:data.pagetextcolor1}}>{data.pagetext1}</h3>:<h3 style={{color:data.pagetextcolor1}}>Welcome to my page.</h3>}
          </div>

          {data.image1?<img src={data.image1} alt="" className='section-one'/>:<img src="./images/932271.jpg" alt="" className='section-one' />}
        </div>
      </div>
      <section id='home'>
        <div class="section sec-bg sec-bg-1" style={{backgroundColor:data.Page2}}>
          <div class="container">
            {data.menu2? <h1 className='d-flex justify-content-center pt-3'>{data.menu2}</h1>:<h1 className='d-flex justify-content-center pt-3'>About</h1>}
            {data.pagetext2 ? <h6>{data.pagetext2}</h6> :<h6 className='subheading'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat tempore libero doloremque officiis distinctio! Ea nam, obcaecati id perferendis repellat ad, nesciunt perspiciatis delectus itaque est natus exercitationem, doloremque veniam?</h6>}
            {data.pagetext22? <p>{data.pagetext22}</p>: <p className='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda nam quaerat sint amet porro nisi doloremque. Nisi tempora, sint, qui sequi officia quos vitae nobis vero rem, voluptatibus aperiam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam repudiandae provident delectus, ipsa quod fuga repellendus, placeat aspernatur aut totam nihil facere dignissimos ut eveniet aperiam, laudantium natus quis odio.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, hic deserunt deleniti quam fugiat iste mollitia fuga atque blanditiis tempore, corporis amet, fugit dicta quidem dolore soluta beatae rerum consequuntur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis omnis dolorem iusto tempora nobis voluptatibus repellendus a, ab exercitationem nesciunt, velit eligendi alias, necessitatibus natus minus? Nam enim incidunt delectus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, praesentium. Eius facilis sint repellat in quae repellendus deleniti obcaecati, exercitationem qui cupiditate dignissimos odio laudantium recusandae ratione culpa earum odit!
            </p>}
           {data.pagetext23? <p>{data.pagetext23}</p> :<p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore voluptates nisi sunt delectus provident omnis nemo pariatur sint, ratione rerum. Recusandae voluptatum fuga culpa quaerat hic odio dolor doloribus?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nobis unde velit voluptas aut minus animi itaque corrupti minima odio porro amet eveniet nulla consectetur, vero necessitatibus eum ipsam doloribus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste similique sit magnam alias id ad pariatur repellat excepturi in impedit libero atque aperiam, adipisci repudiandae rerum recusandae. Vero, minima.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam. Neque deserunt amet consequatur facere voluptatibus ea architecto. Quasi quos et sunt possimus facere accusantium temporibus similique, porro quaerat facilis?
            </p>}
            <div class="row">
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <div class="section sec-bg sec-bg-2" style={{backgroundColor:data.Page3}}>
          <div class="container" >
            <div className="">
              <div class="row">
                <div className="col-md-6 mt-5">
                  {data.pagetext3? <p>{data.pagetext3}</p>: <p className='para3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, soluta delectus sed magnam fugiat eos omnis, facere illo est dolore ipsam a repellat, quasi dolorum error corporis vel qui?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sed quo! Nulla ratione, accusantium voluptas minima omnis fugiat sed quibusdam animi totam atque, ipsa recusandae ex cumque tenetur est laboriosam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, quisquam commodi architecto necessitatibus eaque? Unde veritatis, doloremque illum illo ipsa recusandae nesciunt officia, reprehenderit culpa ullam commodi, nemo exercitationem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, itaque. Perferendis doloribus ipsa nihil enim ut id reiciendis animi repellendus sit. Debitis facere dolor, praesentium nulla asperiores architecto placeat magnam.
                  </p>}
                </div>
                <div className="col-md-6 mt-5">
                  {data.pagetext32? <p>{data.pagetext32}</p> :<p className='para4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos neque a commodi, qui repellat quaerat ab molestiae autem necessitatibus esse sequi ratione optio, fugiat in quasi ipsa nemo amet assumenda.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad numquam? Rem totam aliquam rerum illo sunt voluptatum odit! Fugit, aliquid. Rerum eaque cum nihil architecto, fugiat corporis odio deserunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus quasi modi enim, qui error quibusdam. Mollitia iste eius molestias libero ab ex itaque similique, ut officia, voluptatum hic nobis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a, illo omnis, vero reprehenderit vel quas earum eius magni hic, dolores consectetur laboriosam distinctio doloribus rem aperiam fugiat maiores aliquid!
                  </p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div class="section">
          <div class="container">
            <div className="">
              <div class="row d-flex justify-content-center">
                <div className="col-md-12 mt-5">
                 {data.menu3? <h3>{data.menu3}</h3>: <h3 className=''>Contact Us</h3>}
                  <p>Feel free to contact.</p>
                  <div class="container my-5">
                    <section class="contact-section dark-grey-text mb-5">
                      <div class="card">
                        <div class="row">
                          <div class="col-lg-8">
                            <div class="card-body form">
                              <h3 class="font-weight-bold dark-grey-text mt-4"><i class="fas fa-envelope pr-2 mr-1"></i>Write to us:</h3>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="md-form mb-0">
                                    <input type="text" id="form-contact-name" class="form-control" />
                                    <label for="form-contact-name" class="">Your name</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="md-form mb-0">
                                    <input type="text" id="form-contact-email" class="form-control" />
                                    <label for="form-contact-email" class="">Your email</label>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="md-form mb-0">
                                    <input type="text" id="form-contact-phone" class="form-control" />
                                    <label for="form-contact-phone" class="">Your phone</label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="md-form mb-0">
                                    <input type="text" id="form-contact-company" class="form-control" />
                                    <label for="form-contact-company" class="">Your company</label>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="md-form mb-0">
                                    <textarea id="form-contact-message" class="form-control md-textarea" rows="3"></textarea>
                                    <label for="form-contact-message">Your message</label>
                                    <a class="btn-floating btn-lg blue" href='#template2'>
                                      <i class="far fa-paper-plane"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="card-body contact text-center h-100 white-text">
                              <h3 class="font-weight-bold my-4 pb-2">Contact information</h3>
                              <ul class="text-lg-left list-unstyled ml-4">
                                <li>
                                  {data.place ? <p><i class="fas fa-map-marker-alt pr-2"></i>{data.place}</p>:<p><i class="fas fa-map-marker-alt pr-2"></i>New York, 94126, USA</p>}
                                </li>
                                <li>
                                  {data.phone ?<p><i class="fas fa-phone pr-2"></i>{data.phone}</p>: <p><i class="fas fa-phone pr-2"></i>+ 01 234 567 89</p>}
                                </li>
                                <li>
                                  {data.phone ?<p><i class="fas fa-envelope pr-2"></i>{data.mail}</p>: <p><i class="fas fa-envelope pr-2"></i>contact@example.com</p>}
                                </li>
                              </ul>
                              <hr class="hr-light my-4" />
                              <ul class="list-inline text-center list-unstyled">
                                <li class="list-inline-item">
                                  <a class="p-2 fa-lg tw-ic" href='https://www.twitter.com'>
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a class="p-2 fa-lg li-ic" href='https://www.linkedin.com'>
                                    <i class="fab fa-linkedin-in"> </i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a class="p-2 fa-lg ins-ic" href='https://www.instagram.com'>
                                    <i class="fab fa-instagram"> </i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
      <div className="sec-footer">
        <h6>chaavie 2023 &copy;</h6>
      </div>
      </footer>
      

    </div>

  )
}
