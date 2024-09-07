import { Link, Outlet, useLocation } from "react-router-dom";
import Icon from '../template/Icon';

const AuthLayout = () => {
    const location = useLocation().pathname;
    return (
        <div className="flex items-center min-h-screen p-5 md:flex-row flex-col">
            <div className="flex-1 h-full m-10">
                <div className="bg-white w-full h-80 md:h-screen -skew-x-6 rounded-3xl p-5">
                    <div className="flex justify-between items-center w-full gap-10">
                        <Icon />

                        <div className="flex items-center gap-3">
                            <Link to={'/auth/login'} className={`bg-transparent ${location === '/auth/login' && 'border border-white'}  text-white md:px-8 md:py-2 px-4 rounded-full`}>Sign in</Link>
                            <Link to={'/auth/registration'} className={`bg-transparent ${location === '/auth/registration' && 'border border-white'}  text-white md:px-8 md:py-2 px-4 rounded-full`}>Sign up</Link>
                        </div>

                    </div>
                    <img src="https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg" className="w-full h-full absolute top-0 left-0 object-cover rounded-3xl -z-10" />
                </div>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;