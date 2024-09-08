import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';
import auth from '../../firebase.config';

const Login = () => {

    const GoogleProvider = new GoogleAuthProvider();
    const HandleGoogleLogin = () => {
        const toastId = toast.loading('Request for login');
        signInWithPopup(auth, GoogleProvider)
            .then(() => {
                toast.success('Requset Accpeted!', { id: toastId });
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, { id: toastId });
            });
    }
    // add more logic for login
    return (
        <div>
            <p className="font-bold text-4xl text-center">Welcome back!</p>
            <form className="flex items-center mt-3 flex-col gap-3 max-w-xs mx-auto">
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Email" />
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Password" />
                <div className="divider">OR</div>

                <button type='button' onClick={HandleGoogleLogin} className="bg-white outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono">
                    Login via Google
                    <FaGoogle />
                </button>


                <button type='submit' className="outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono bg-primary">
                    Login
                </button>

                <p>Don't have an account? <Link to="/auth/registration" className="text-red-600">click here</Link></p>
            </form>
        </div>
    );
};

export default Login;