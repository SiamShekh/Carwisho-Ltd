import { Link } from "react-router-dom";
import Icon from "../components/template/Icon";

const Login = () => {
    return (
        <div className="flex items-center h-screen p-5">
            <div className="flex-1 h-full m-10">
                <div className="bg-white w-full h-full -skew-x-6 rounded-3xl p-5">
                    <div className="flex justify-between items-center">
                        <Icon />

                        <div className="flex items-center gap-3">
                            <Link to={'#'} className="bg-transparent border border-black px-8 py-2 rounded-full">Sign in</Link>
                            <Link to={'#'} className="bg-transparent px-8 py-2 rounded-full">Sign up</Link>
                        </div>

                    </div>
                    <img src="https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg" className="w-full h-full absolute top-0 left-0 object-cover rounded-3xl -z-10" />
                </div>
            </div>
            <div className="flex-1">
                <p className="font-bold text-4xl text-center">Welcome back!</p>
                <form className="flex items-center mt-3 flex-col gap-3">
                    <input type="text" className="max-w-xs bg-white outline-none border w-full h-10 rounded-xl px-5" placeholder="Email" />
                    <input type="text" className="max-w-xs bg-white outline-none border w-full h-10 rounded-xl px-5" placeholder="Password" />
                </form>
            </div>
            {/* Add more from figma design */}
        </div>
    );
};

export default Login;