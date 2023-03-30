import React from 'react'

export default function CreateForm() {
    return (
        <div>
            <div className="">
                <nav className='navbar bg-dark'>
                    <div className="navbar nav-item">
                        <span className='text-white'>Chaavie</span>
                    </div>
                </nav>
                <section>
                    <h6 className="pt-5">
                        Setting up credentials...
                    </h6>
                </section>
                <section>
                    <div className="container">
                        <form action="" id='formid'>
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Your Brand Name</label>
                                <input type="text" className="form-control" id="inputbrand" placeholder="Chaavie" name="brandname" />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu1" placeholder="Home" name="menu1" />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu2" placeholder="About" name="menu2" />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Page Heading</label>
                                <input type="text" className="form-control" id="Menu3" placeholder="Contact" name="menu3" />
                            </div>
                            <hr />
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page1 Text</label>
                                <textarea className="form-control" id="PageText1" rows="3" name="pagetext1"></textarea>
                            </div>

                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 1</label>
                                <input className="form-control" type="file" id="Image1" name="image1" />
                            </div>
                            <hr />
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page2 Text</label>
                                <textarea className="form-control" id="PageText2" rows="3" name="pagetext2"></textarea>
                            </div>

                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 2</label>
                                <input className="form-control" type="file" id="Image2" name="image2" />
                            </div>
                            <hr />
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Page3 Text</label>
                                <textarea className="form-control" id="PageText3" rows="3" name="pagetext3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pick an image for page 3</label>
                                <input className="form-control" type="file" id="Image3" name="image3" />
                            </div>

                        </form>
                        <div className="row">
                            <button type="button" className="btn btn-outline-success" onclick="preview()">Preview</button>
                            <button type="button" className="btn btn-outline-success " onclick="">Generate</button>
                            <button type="button" className="btn btn-outline-danger" onclick="clearfields()">Cancel</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
