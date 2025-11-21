import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import axios from "axios";
import { auth } from "../../../Firebase/Firebase.init";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  console.log('REgister', location);
  const navigate = useNavigate();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log("after register", data);
    const profileImg = data.photoURL[0];

    registerUser(data.email, data.password)
      .then(() => {

        // 1. stote the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the URL
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        return axios.post(image_API_URL, formData);
      })
      .then((res) => {
        console.log("after image Upload", res.data.data.url);

        // 3. update user profile to firebase
        const userProfile = {
          displayName: data.name,
          photoURL: res.data.data.url,
        };

        return updateUserProfile(userProfile);
      })
      .then(() => {
        console.log("User profile updated", auth.currentUser);
        navigate(location?.state || '/')
        toast.success("Register Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required.</p>
              )}
              {/* Photo */}
              <label className="label">Your Photo</label>
              <input
                type="file"
                {...register("photoURL", { required: true })}
                className="file-input"
                placeholder="Your Photo"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Photo is required.</p>
              )}
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required.</p>
              )}
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}<>~`/+_=|.,;:'"-]).+$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character.
                </p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              Already have an account? Please{" "}
              <Link state={location?.state} className="text-blue-400 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
