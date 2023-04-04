import React from 'react';
import './Login.css';
import './Loginscript';
export default function Login() {
    return (
        <div>
            <div className="container-login">
                <div className="logo-container">
                    <img src="https://www.freeiconspng.com/uploads/twitter-icon-8.png" alt="twitter button"  width="16"/><br/><br/>
                </div>
                <h1>Sign In</h1>
                <div className="login-btn">
                    <button className='google-btn btn'>
                        <img src="https://www.freeiconspng.com/uploads/gmail-icon-0.png" alt="gmail button" width="16" />
                        <span>Sign in with Google</span>
                    </button>
                    <br/><br/>
                    {/* <button className="apple-btn btn">
                        <img src="https://www.freeiconspng.com/uploads/apple-ios-png-12.png" alt="apple button" width="16"/>
                        <span>Sign in with apple</span>
                    </button><br/><br/> */}
                </div>
                <br/>
                <div className="hr-text">
                    <hr/>
                </div>
                <div className="hr-text">
                    <hr />
                </div>
                <div className="or"><p>or</p></div>
                <input type="text" id='info' placeholder='phone,email or account' /><br/><br/>
                <div className="login-btn">
                    <button className="next-btn btn">Next</button><br/><br/>
                    <button className="forgot-btn btn">Forgot password?</button><br/><br/>
                </div>
                <footer>Dont have an account?<a href="">SignUp</a></footer>
            </div>
        </div>

    )
}
