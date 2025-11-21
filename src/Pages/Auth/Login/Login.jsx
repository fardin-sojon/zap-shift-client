import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit , formState: {errors}} = useForm();
  const {signInUser} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("In the login page",location);

  const haldleLogin = (data)=>{
    // console.log('form data', data)
    signInUser(data.email, data.password)
    .then(result=>{
      console.log(result.user);
      toast.success('Login Successfully')
      navigate(location?.state || '/')
    })
    .catch(error=>{
      console.log(error.message);
      toast.error(error.message)
    })
  }

  return (
    <div className="">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSubmit(haldleLogin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
              {
                errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>
              }
              {/* Password */}
              <label className="label">Password</label>
              <input type="password" {...register('password', {required: true, minLength:6})} className="input" placeholder="Password" />
              {
                errors.password?.type === 'minLength' && <p className="text-red-500">Passoword must be 6 charaters or longer</p>
              }
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>New to Zap Shift? Please <Link 
              state={location?.state}
            className="text-blue-400 underline" to='/register'>Register</Link></p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
