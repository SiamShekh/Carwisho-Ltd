import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-center">Create Account!</p>
            <form className="flex items-center mt-3 flex-col gap-3 max-w-xs mx-auto">
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Name" />
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Email" />
                <input type="tel" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Phone" />
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Address" />
                <input type="text" className="bg-gray-300 outline-none border border-white w-full h-10 rounded-xl px-5" placeholder="Password" />
                <div className="divider">OR</div>

                <button className="bg-white outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono">
                    <span className='line-clamp-1'>
                        Register via Google
                    </span>
                    <FaGoogle />
                </button>


                <button className="outline-none border border-white w-full h-10 rounded-full px-5 flex justify-center items-center gap-3 text-xl font-mono bg-primary">
                    Registration
                </button>

                <p>Alreadu have an account? <Link to="/auth/login" className="text-red-600">click here</Link></p>
            </form>
        </div>
    );
};

export default Registration;