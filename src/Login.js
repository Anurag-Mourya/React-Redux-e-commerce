
import React, { useRef } from 'react';
import App from './App';
function Login() {
  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem("emailData")
  const getpassword = localStorage.getItem("passwordData")

  const submitHandler = (e) => {
    if (email.current.value === "eve.holt@reqres.in" && password.current.value === "pistol") {
      localStorage.setItem("emailData", "eve.holt@reqres.in");
      localStorage.setItem("passwordData", "pistol");
    }
    // e.preventDefault();
  }
  return (
    <div>
      {
        getEmail && getpassword ? <App /> :
          <div className="row align-center m-auto container my-5 py-5">

            <div className="col-6 m-auto container border rounded  p-4">
              <div className="mb-5 bg-primary text-center text-white rounded p-1"><h1>Login And Enter</h1></div>
              <form onSubmit={submitHandler}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example1"><strong>Email address :</strong>  </label>
                  <input type="email" id="form2Example1" className="form-control" ref={email} placeholder='Enter your email' />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example2"><strong>Password :</strong>  </label>
                  <input placeholder='Enter your password' type="password" id="form2Example2" className="form-control" ref={password} />
                </div>
                <button className="btn btn-primary btn-block mb-4">Log In</button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}
export default Login