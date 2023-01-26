import React from 'react'
import RegisterImg from "../../images/register.png"
import './Register.css'



const Register = () => {
  return (
    <div className='registerPage'>
      <div className="left">
        <h1>Register Your Account</h1>

        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>

      <div className="right">
        <img src={RegisterImg} alt="" />
      </div>
    </div>

    )
}

export default Register
