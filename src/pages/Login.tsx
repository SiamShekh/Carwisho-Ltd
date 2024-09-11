import { useForm, } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../components/rtk/Endpoint';
import LoadingModal from '../components/ui/LoadingModal';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../components/rtk/UserSlice';
import { useEffect } from 'react';

interface LoginFormData {
    email: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit, reset } = useForm<LoginFormData>();
    const [triggerLogin, { isLoading, data }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const HandleLogin = (data: LoginFormData) => {
        triggerLogin(data);
        reset();
    }

    useEffect(() => {
        if (data?.success) {
            if (data?.message) {
                toast.success(data?.message);
                dispatch(setUser({ token: data?.token, email: data?.data?.email }));
                navigate('/');
            }
        }
    }, [data, dispatch])

    return (
        <div>
            <LoadingModal isLoading={isLoading} />
            <p className="font-bold text-4xl text-center">Welcome back!</p>
            <form onSubmit={handleSubmit(HandleLogin)} className="flex items-center mt-3 flex-col gap-3 max-w-xs mx-auto">
                <input type="text" {...register('email')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Email" />
                <input type="password" {...register('password')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Password" />

                <button type='submit' className="outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono bg-primary">
                    Login
                </button>

                <p>Don't have an account? <Link to="/auth/registration" className="text-red-600">click here</Link></p>
            </form>
        </div>
    );
};

export default Login;