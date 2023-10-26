import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-10">Sign Up</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center pb-4'>Already have an account?<Link className='text-orange-600' to="/login">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};
export default SignUp;