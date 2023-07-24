
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {user,signIn}=useContext(AuthContext)
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const location =useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname ||'/'
  console.log(user);
  const handleLogin=(event)=>{
    event.preventDefault()
    setSuccess('')
    setError('')
    const form =event.target
    const email =form.email.value
    const password =form.password.value
    console.log(email,password);

    if(password.length<6){
      setError("Your password must be at least 6 characters")
      return
    }

    signIn(email,password)
    .then(result =>{
      const loggedUser =result.user
      console.log(loggedUser);
      form.reset()
      setSuccess('Login Successful')
      Swal.fire(
        'Excellent!',
        'Login Successful!',
        'success'
        )
        navigate(from,{replace: true})
      setError('')
    })
    .catch(error=>{
      console.log(error.message);
      setError(error.message)
      return
    })
  
    
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="text-center w-1/2 ">
            <img className="w-full h-96" src="https://rb.gy/2zdyr" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold  font-mono">
                {" "}
                Please Login{" "}
              </h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <small className="hover:underline ">
                New to my site? <Link to="/signUp"> Sing Up</Link>
              </small>
              <p className="text-red-700">{error}</p>
            <p className="text-green-500">{success}</p>
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
