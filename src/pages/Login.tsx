import { useForm, } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginUser, useLoginUserMutation } from '../components/rtk/Endpoint';

interface LoginFormData {
    email: string,
    password: string
}

const Login = () => {

    // const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm<LoginFormData>();
    const [triggerLogin, { data, status, error }] = useLoginUserMutation();

    const HandleLogin = (data: LoginFormData) => {
        console.log(data);
        triggerLogin(data);
        
        
        // dispatch(LoginUser(data))

    }

    console.log(data);
    console.log(status);
    console.log(error);
    


    return (
        <div>
            <p className="font-bold text-4xl text-center">Welcome back!</p>
            <form onSubmit={handleSubmit(HandleLogin)} className="flex items-center mt-3 flex-col gap-3 max-w-xs mx-auto">
                <input type="text" {...register('email')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Email" />
                <input type="text" {...register('password')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Password" />
                <div className="divider">OR</div>

                <button type='button' className="bg-white outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono">
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