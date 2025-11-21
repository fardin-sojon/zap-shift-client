import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const Navber = () => {

  const {user, LogOut} = useAuth();
  console.log(user);

  const haldleLogOut =()=>{
    LogOut()
    .then(result=>{
      console.log(result);
      toast.success('LogOut Account')
    })
    .catch(error=>{
      console.log(error.message);
      toast.error(error.message)
    })
  }

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to='/' className="mx-4 cursor-pointer">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <a onClick={haldleLogOut} className="btn">LogOut</a> :
            <Link to='/login' className="btn">Login</Link>
          }
          <Link to='/rider' className="btn btn-primary text-black mx-3">Be a Rider</Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
