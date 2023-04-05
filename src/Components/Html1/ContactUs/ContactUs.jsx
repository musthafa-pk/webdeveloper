import React, { useContext } from 'react'
import './ContactUs.css'
import { FormContext } from '../../../Context/Context'

export default function ContactUs() {
  const {data,setdata} = useContext(FormContext)
  return (
    <div>
      <section id='contact' style={{backgroundColor:data.Page3}}>
      <div className="container">
        <div className="row">
        <div className="col-md-6 panel1">
        
        {data.menu3 ? <h2>{data.menu3} </h2> :<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>}

        {data.pagetext3 ? <p>{data.pagetext3}</p> : <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>}

        <div class="row">

          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id='name' name='name' className='form-control' />
                    <label for="name" class="">Your name</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label for="email" class="">Your email</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label htmlFor="subject" class="">Subject</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div class="text-center text-md-left">
              <a class="btn btn-send" onClick="">Send</a>
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                {data.place ? <p>{data.place}</p> : <p>Calicut, Kerala, INDIA</p>}
              </li>

              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                {data.phone ? <p>{data.phone}</p> : <p>+ 91 123 456 7890</p>}
              </li>

              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                {data.mail ? <p>{data.mail}</p> :<p>mail@gmail.com</p>}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 panel2">
        {data.image3 ? <img src={data.image3}/>:<img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1679484953~exp=1679485553~hmac=7667330cf0386a02dbc6bd60fed1a459ff91ad48dc8b0bac7863680ab92f5d0c"
         alt="" width='90%' />}
      </div>

        </div>
        
      </div>

      </section>
      
    </div>
  )
}
