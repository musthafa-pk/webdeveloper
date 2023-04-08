import React, { useEffect, useState, useContext } from 'react'
import './CreateForm.css'
import { FormContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export default function CreateForm() {
    const { data, setdata } = useContext(FormContext)
    //    const[title,setTitle] = useState('');
    //    const [colors,setcolors] = useState('');



    // props.onQuery(title)

    // console.log(title);
    function clear() {
        window.location.reload();
        console.log("hai");
    }
    function handleChange(e) {
        console.log(e.target.files);
        const value = URL.createObjectURL(e.target.files[0]);
        const name = e.target.name;
        // setTitle(URL.createObjectURL(e.target.files[0]));
        setdata({ ...data, [name]: value });
    };


    console.log(data)
    //    console.log(data)
    function changeColor(pickedcolor) {
        console.log(pickedcolor);
        setdata({ ...data, "color": pickedcolor });
    }

    function changeHeroColor(Hero) {
        console.log(Hero);
        setdata({ ...data, "Hero": Hero });
    }
    function changePage2Color(Page2) {
        console.log(Page2);
        setdata({ ...data, "Page2": Page2 })
    }
    function changePage3Color(Page3) {
        console.log(Page3);
        setdata({ ...data, "Page3": Page3 })
    }

    return (

        <div>
            <div className="col-md-12">
                {/* <nav className='navbar bg-dark fixed-top col-md-3 form-nav'>
                    <div className="navbar nav-item ">
                        <span className='text-white mx-3'>Chaavie</span>
                    </div>
                </nav> */}
                <section className='pt-5'>
                    <h5 className="pt-3">
                        Setting up credentials...
                    </h5>
                </section>
                <section>
                    <div className="">
                        <form action="" id='formid ' className='form-group'>
                            <h3>Topbar</h3>
                            <div className="col-mb-3">
                                <label htmlFor="formGroupExampleInput" className='form-label'>Pick Topbar Color</label>
                                <div className="row color-panel">
                                    <div className="color1" onClick={() => changeColor("#ffc0cb")} ></div>
                                    <div className="color2" onClick={() => changeColor('#97c6f8')}></div>
                                    <div className="color3" onClick={() => changeColor('#9ae69c')}></div>
                                    <div className="color4" onClick={() => changeColor('#97b45e')}></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Your Brand Name</label>
                                <div className="row">
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="inputbrand" placeholder="your brand name here" name="brandname" maxLength="25" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="colorball-wrap">
                                            <input type="color" name="textcolor1" id="colorball" value="#002e5b" className='colorball' onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label label-page-heading">Page Heading</label>
                                <div className="hide">
                                    <span>Pick background less images for best result</span>
                                </div>
                                <input type="text" className="form-control" id="Menu1" placeholder="Home" name="menu1" maxLength="10" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu2" placeholder="About" name="menu2" maxLength="10" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                            </div>
                            <hr />
                            <h3>Hero Area</h3>
                            <div className="col-mb-3">
                                <label htmlFor="formGroupExampleInput" className='form-label'>Pick Hero Color</label>
                                <div className="row color-panel">
                                    <div className="color1" onClick={() => changeHeroColor("#ffc0cb")} ></div>
                                    <div className="color2" onClick={() => changeHeroColor('#97c6f8')}></div>
                                    <div className="color3" onClick={() => changeHeroColor('#9ae69c')}></div>
                                    <div className="color4" onClick={() => changeHeroColor('#97b45e')}></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Hero Text</label>
                                <div className="row">
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="Hero-text" placeholder="Hero text here" name="herotext" maxLength="55" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="colorball-wrap">
                                            <input type="color" name="herotextcolor" id="colorball" value="#000000" className='colorball' onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Page1 Text</label>
                                        <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" maxLength="499" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="colorball-page">
                                        <input type="color" name="pagetextcolor1" id="Pagetextcolor1" value="#000000" className='colorball' onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                    </div>

                                </div>

                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label label-page-heading">Pick an image for page 1</label>
                                <input className="form-control" type="file" id="Image1" name="image1" onChange={handleChange} />
                            </div>
                            <hr />
                            <h3>Second Page</h3>
                            <div className="col-mb-3">
                                <label htmlFor="formGroupExampleInput" className='form-label'>Pick Page2 Color</label>
                                <div className="row color-panel">
                                    <div className="color1" onClick={() => changePage2Color("#ffc0cb")}></div>
                                    <div className="color2" onClick={() => changePage2Color('#97c6f8')}></div>
                                    <div className="color3" onClick={() => changePage2Color('#9ae69c')}></div>
                                    <div className="color4" onClick={() => changePage2Color('#97b45e')}></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page2 Text</label>
                                <textarea className="form-control" id="PageText2" rows="3" name="pagetext2" maxLength="599" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })}></textarea>
                            </div>

                                </div>
                                <div className="col-md-3">
                                <div className="colorball-page">
                                        <input type="color" name="pagetextcolor2" id="Pagetextcolor2" value="#000000" className='colorball' onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                    </div>
                                </div>
                            </div>
                    
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 2</label>
                                <input className="form-control" type="file" id="Image2" name="image2" onChange={handleChange} />
                            </div>
                            <hr />
                            <h3>Third Page</h3>
                            <div className="col-mb-3">
                                <label htmlFor="formGroupExampleInput" className='form-label'>Pick Page3 Color</label>
                                <div className="row color-panel">
                                    <div className="color1" onClick={() => changePage3Color("#ffc0cb")} ></div>
                                    <div className="color2" onClick={() => changePage3Color('#97c6f8')}></div>
                                    <div className="color3" onClick={() => changePage3Color('#9ae69c')}></div>
                                    <div className="color4" onClick={() => changePage3Color('#97b45e')}></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page3 Text</label>
                                <textarea className="form-control" id="PageText3" rows="3" name="pagetext3" maxLength="350" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 3</label>
                                <input className="form-control" type="file" id="Image3" name="image3" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Place,</label>
                                <input type="text" className="form-control" id="Place" placeholder="Place,state,country" name="place" maxLength="30" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                <label for="formGroupExampleInput2" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="Phone" placeholder="+91 0987654321" name="phone"  maxLength="16" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                                <label for="formGroupExampleInput2" className="form-label">Mail</label>
                                <input type="text" className="form-control" id="Mail" placeholder="Mail" name="mail" maxLength="50" onChange={event => setdata({ ...data, [event.target.name]: event.target.value })} />
                            </div>

                        </form>
                        <div className="row">
                            <Link to="/template1"><button type="button" className="btn btn-outline-success" onclick="">Preview</button></Link>
                            <Link to=""><button type="button" className="btn btn-outline-success " onclick="">Generate</button></Link>
                            <Link to=""><button type="button" className="btn btn-outline-danger" onclick={clear}>Cancel</button></Link>
                            {/* <img src={file}/> */}
                        </div>


                    </div>
                </section>
            </div>
        </div>
    )
}
