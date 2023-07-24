/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { FaGithub, FaGoogle  } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate=useNavigate()
  const location =useLocation()
  const from=location.state?.from?.pathname || '/'

    const {user,signInWithGoogle,signInWithGitHub}=useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            navigate(from,{replace: true})
   
            console.log(loggedUser);
          })
          .catch((error) => {
            console.log(error);
          });
        };
    const handleGitHubSignIn = () => {
      signInWithGitHub()
          .then((result) => {
            const loggedUser = result.user;
            navigate(from,{replace: true})
   
            console.log(loggedUser);
          })
          .catch((error) => {
            console.log(error);
          });
        };
    return (
        <div> 
            <h1 className=" mb-3 font-bold text-xl">Or </h1>
             <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary  btn-xs"><FaGoogle  className='text-[16px]' />&nbsp;Continue with Google</button>
             <button onClick={handleGitHubSignIn} className="btn mt-3 btn-outline btn-secondary  btn-xs"><FaGithub className='text-[18px]' />&nbsp;Continue with GitHub</button>
        </div>
    );
};

export default SocialLogin;