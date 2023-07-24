import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import img from '../../assets/pngtree-admission-open-tag-abstract-shape-png-png-image_4566492.png'

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
  const navLinks =(
    <div className="lg:flex items-center ">
    <li><ActiveLink to="/">Home</ActiveLink></li>
    <li><ActiveLink to="/colleges">Colleges</ActiveLink></li>
    <li><ActiveLink to="/admission">Admission</ActiveLink></li>
    <li><ActiveLink to="/myCollege">My College</ActiveLink></li>
    {
      user?(
      <>
        <img
                    title={user && user.displayName}
                    className="w-6 h-6 ml-3 rounded-full mr-3 "
                    src={user?.photoURL}
                    alt=""
                  />
              <li>  <ActiveLink className="px-2" to="/user">{user?.displayName}</ActiveLink></li>
      <button onClick={handleLogOut} className="btn">SignOut</button></>
      ):(
        <>
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/signUp">SignUp</ActiveLink>
        </li>
      </>
      )
    }
    </div>
  )
    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 z-50 bottom-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300  rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Admission</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/' ><img className="w-14" src={img} alt="logo" /></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;