import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../providers/AuthProviders';
import { useContext } from 'react';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => console.log(error.message))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center pt-10">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-error text-white" type="submit" value="Sign In" />
            </div>
          </form>
          <p className='text-center pb-4'>New to cars doctor <Link className='text-orange-600' to="/signUp">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;