import React, { useState } from 'react'
import './CreateForm.css'

export default function CreateForm(props) {
   const[title,setTitle] = useState('');
   const [file,setFile] = useState('');
   function handleChange(e){
    console.log(e.target.files);
    const value = URL.createObjectURL(e.target.files[0]);
    const name = e.target.name;
    setFile(URL.createObjectURL(e.target.files[0]));
    setTitle(URL.createObjectURL(e.target.files[0]));
    setTitle({...title,[name]:value});
   }
//    const value=event.target.value;
 
   

   props.onQuery(title,file)

   console.log(title,file);

    return (

        <div>
            <div className="">
                <nav className='navbar bg-primary fixed-top col-md-3 d-flex justify-content-center'>
                    <div className="navbar nav-item ">
                        <span className='text-white'>Chaavie</span>
                    </div>
                </nav>
                <section className='pt-5 m-2'>
                    <h6 className="pt-3">
                        Setting up credentials...
                    </h6>
                </section>
                <section>
                    <div className="container">
                        <form action="" id='formid '>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Your Brand Name</label>
                                <input type="text" className="form-control" id="inputbrand" placeholder="your brand name here" name="brandname"  onChange={event => setTitle({...title,[event.target.name]: event.target.value})}/>
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu1" placeholder="Home" name="menu1" onChange={event => setTitle({...title,[event.target.name]: event.target.value})} />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu2" placeholder="About" name="menu2" onChange={event => setTitle({...title,[event.target.name]: event.target.value})} />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" onChange={event => setTitle({...title,[event.target.name]: event.target.value})} />
                            </div>
                            <hr />
                            <h3>Hero Area</h3>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page1 Text</label>
                                <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" onChange={event => setTitle({...title,[event.target.name]: event.target.value})}></textarea>
                            </div>

                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 1</label>
                                <input className="form-control" type="file" id="Image1" name="image1" onChange={handleChange} />
                            </div>
                            <hr />
                            <h3>Second Page</h3>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page2 Text</label>
                                <textarea className="form-control" id="PageText2" rows="3" name="pagetext2" onChange={event => setTitle({...title,[event.target.name]: event.target.value})}></textarea>
                            </div>

                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 2</label>
                                <input className="form-control" type="file" id="Image2" name="image2" onChange={handleChange} />
                            </div>
                            <hr />
                            <h3>Third Page</h3>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page3 Text</label>
                                <textarea className="form-control" id="PageText3" rows="3" name="pagetext3" onChange={event => setTitle({...title,[event.target.name]: event.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 3</label>
                                <input className="form-control" type="file" id="Image3" name="image3" onChange={handleChange} />
                            </div>

                        </form>
                        <div className="row">
                            <button type="button" className="btn btn-outline-success" onclick="">Preview</button>
                            <button type="button" className="btn btn-outline-success " onclick="">Generate</button>
                            <button type="button" className="btn btn-outline-danger" onclick="">Cancel</button>
                            {/* <img src={file}/> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
