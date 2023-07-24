/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
const SignUp = () => {
  const {user,createUser,updateUserData,logOut}=useContext(AuthContext)
 
  const Navigate=useNavigate()
  const [error, serError] = useState('');
  const [success,setSuccess]=useState('')
  const handleRegister =event=>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value
    const photo =form.photo.value
    const password =form.password.value
    console.log(name,email,password);

    createUser(email,password)
    .then(result =>{
      serError('')
      setSuccess('')
      const loggedUser =result.user
      console.log(loggedUser);
      setSuccess('You have registered Successfully')
      Swal.fire(
        'Good job!',
        'You have registered Successfully!',
        'success'
      )
      updateUserData(result.user,name,photo)
      form.reset()
      logOut()
      .then(()=>{
        Navigate('/login')
      })
    })
    .catch(error=>{
      serError(error.message);
      console.log(error.message);
      return
    })
  }
 
    return (
     
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold  font-mono mb-3">
              Please Register now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Phot Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register/SignUp</button>
              </div>
              <p className="hover:underline">
                <small>
                  <Link to="/login">Already have an account? Login</Link>
                </small>
              </p>
              <p className="text-red-500">{error}</p>
              <p className="text-green-500">{success}</p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
   
    );
};

export default SignUp;