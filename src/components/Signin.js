import React from "react"
import {FaUser} from "react-icons/fa"
import {FaLock} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

const Signin = () => {
  return (
    <React.Fragment>
      <div className='signin'>
        <h2 className='sign-up form'>Login</h2>
        <div className="inputField">
          <div className="user">
            <button className="icon"><FaUser /></button>
            <input type='text' placeholder="username" className='signup-input' id="signUp"/>
          </div>
        </div>
        <div className="inputField">  
          <div className="pass">
            <button className="icon"><FaLock /></button>
            <input type='password' placeholder="password" />
          </div>
        </div>
        <div className="go-btn">
          <button className="btn">signin</button>
        </div>
        <p className="social-text">Or sign up with social platforms</p>
        <div className="social-icon">
          <button className="social"><a href=""><FaFacebook /></a></button>
          <button className="social"><a href=""><FaTwitter /></a></button>
          <button className="social"><a href=""><FaGoogle /></a></button>
          <button className="social"><a href=""><FaLinkedin /></a></button>
        </div>
      </div>  
    </React.Fragment>
  )

}

export default Signin
