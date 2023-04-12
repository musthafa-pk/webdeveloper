import React from 'react'
import { Link } from 'react-router-dom'
import Html2 from '../../Html2/Html2'
import { useContext } from 'react'
import { FormContext } from '../../../Context/Context'

export default function Form2() {
    
    const { form2,setform2 }=useContext(FormContext)
    function changeColor(value){
        
        console.log(value);
    }
    return (
        <div>
            <div className="col-md-12">
                <div className='pt-5'>
                    <h5>Seting up your credentials....</h5>
                </div>
                <form action="">
                    <h3>Top Bar</h3>
                    <div>
                        <div className="col-mb-3">
                            <label htmlFor="formGroupExampleInput" className='form-label'>Pick Topbar Color</label>
                            <div className="row color-panel">
                                <div className="color1" onClick={changeColor('#ffffff')} ></div>
                                {/* <div className="color2" onClick={changeColor('#ff00ff')}></div>
                                <div className="color3" onClick={changeColor('#ffff00')}></div>
                                <div className="color4" onClick={changeColor('#f0ff00')}></div> */}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Your Brand Name</label>
                            <div className="row">
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="inputbrand" placeholder="your brand name here" name="brandname" maxLength="25" onChange='' />
                                </div>
                                <div className="col-md-2">
                                    <div className="colorball-wrap">
                                        <input type="color" name="textcolor1" id="colorball" value="#002e5b" className='colorball' onChange='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label label-page-heading">Page Heading</label>
                            <div className="hide">
                                <span>Pick background less images for best result</span>
                            </div>
                            <input type="text" className="form-control" id="Menu1" placeholder="Home" name="menu1" maxLength="10" onChange="" />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                            <input type="text" className="form-control" id="Menu2" placeholder="About" name="menu2" maxLength="10" onChange="" />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                            <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label label-page-heading">Pick an image for page 1</label>
                            <input className="form-control" type="file" id="Image1" name="image1" onChange="{handleChange}" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Main Text</label>
                            <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Sub Text</label>
                            <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                        </div>
                        <hr />
                        <h3>Page Two</h3>
                        <div className="col-mb-3">
                            <label htmlFor="formGroupExampleInput" className='form-label'>Pick Page Color</label>
                            <div className="row color-panel">
                                <div className="color1" onClick="" ></div>
                                <div className="color2" onClick="" ></div>
                                <div className="color3" onClick="" ></div>
                                <div className="color4" onClick="" ></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Heading</label>
                            <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Sub Heading</label>
                            <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" maxLength="10" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Para 1</label>
                                    <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" maxLength="499" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="colorball-page">
                                    <input type="color" name="pagetextcolor1" id="Pagetextcolor1" value="#000000" className='colorball' onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Para 2</label>
                                    <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" maxLength="499" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="colorball-page">
                                    <input type="color" name="pagetextcolor1" id="Pagetextcolor1" value="#000000" className='colorball' onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h3>Page Three</h3>
                        <div className="col-mb-3">
                            <label htmlFor="formGroupExampleInput" className='form-label'>Pick Page Color</label>
                            <div className="row color-panel">
                                <div className="color1" onClick="" ></div>
                                <div className="color2" onClick="" ></div>
                                <div className="color3" onClick="" ></div>
                                <div className="color4" onClick="" ></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Para 1</label>
                                    <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" maxLength="499" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="colorball-page">
                                    <input type="color" name="pagetextcolor1" id="Pagetextcolor1" value="#000000" className='colorball' onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Para 2</label>
                                    <textarea className="form-control" id="PageText1" rows="3" name="pagetext1" maxLength="499" onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="colorball-page">
                                    <input type="color" name="pagetextcolor1" id="Pagetextcolor1" value="#000000" className='colorball' onChange="{event => setdata({ ...data, [event.target.name]: event.target.value })}" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h3>Page Four</h3>
                        <div className="col-mb-3">
                            <label htmlFor="formGroupExampleInput" className='form-label'>Pick Page Color</label>
                            <div className="row color-panel">
                                <div className="color1" onClick="" ></div>
                                <div className="color2" onClick="" ></div>
                                <div className="color3" onClick="" ></div>
                                <div className="color4" onClick="" ></div>
                            </div>
                        </div>

                    </div>

                </form>
                <div className="row">
                    <Link to="/template1"><button type="button" className="btn btn-outline-success" onclick="">Preview</button></Link>
                    <Link to="/completed"><button type="button" className="btn btn-outline-success " onclick="">Generate</button></Link>
                    <Link to=""><button type="button" className="btn btn-outline-danger" onclick="{clear}">Cancel</button></Link>
                    <a href='template.html' download={<Html2 />}>Download</a>
                    {/* <img src={file}/> */}
                </div>

            </div>
        </div>
    )
}
