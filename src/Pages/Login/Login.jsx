import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Auth Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const {handleSignIn, user} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const email = form.get('email');
        const password = form.get('password');

        handleSignIn(email, password)
        .then(res => {
            const loggedUser = {
                email,
                lastLoggedAt : res.user?.metadata?.lastSignInTime
            }
            console.log(loggedUser);
            fetch('https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/users', {
                method: "PATCH" ,
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data) {

                    toast.success(`Sign in as ${res.user.email}`);
                }
            })
        })
        .catch(err => {
            toast.error(err.message);
        })



    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-sky-600/90">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;