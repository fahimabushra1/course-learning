import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useState } from "react";


const SignUp = () => {
  const {createUser,user}= useAuth();
  const [passMatch, setPassMatch]= useState();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/"


  const handleSubmit= (e)=>{
    e.preventDefault();
  
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name,email,password,confirmPassword)
  
  
    if(passMatch != confirmPassword){
      setPassMatch(true);
    }

    if(password==confirmPassword){
      createUser(email,password)
      if(user){
        navigate(from)
       }
  }
}


    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
          <label className="label">
            <p>Already have an account?</p>
            <Link to="/login" className="label-text-alt link link-hover">Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <GoogleLogin/>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;