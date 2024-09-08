import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../components/rtk/Endpoint';
import LoadingModal from '../components/ui/LoadingModal';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

interface TUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    role?: "admin" | "user",
    address: string,
}

const Registration = () => {

    const { handleSubmit, register } = useForm<TUser>();
    const [triggerRegister, { isLoading, data }] = useRegisterUserMutation();
    const HandleRegister = (data: TUser) => {
        triggerRegister({ role: 'user', ...data });
    }

    useEffect(() => {
        if (data?.success) {
            if (data?.message) {
                toast.success(data?.message);
            }
        }
    }, [data])

    return (
        <div>
            <LoadingModal isLoading={isLoading} />
            <p className="font-bold text-4xl text-center">Create Account!</p>
            <form onSubmit={handleSubmit(HandleRegister)} className="flex items-center mt-3 flex-col gap-3 max-w-xs mx-auto">
                <input type="text" {...register('name')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Name" />
                <input type="email" {...register('email')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Email" />
                <input type="tel" {...register('phone')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Phone" />
                <input type="text" {...register('address')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Address" />
                <input type="text" {...register('password')} required className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Password" />

                <button type='submit' className="outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono bg-primary">
                    Registration
                </button>

                <p>Already have an account? <Link to="/auth/login" className="text-red-600">click here</Link></p>
            </form>
        </div>
    );
};

export default Registration;