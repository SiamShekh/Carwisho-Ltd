import { Link } from "react-router-dom";
import Icon from "../template/Icon";

const Navbar = () => {
    const NavItem = [
        {
            id: 1,
            name: "Service",
            link: "/service",
        },
        {
            id: 2,
            name: "Booking",
            link: "/booking",
        },
        {
            id: 1,
            name: "Login",
            link: "/login",
        },
    ]
    return (
        <div className="flex justify-between items-center max-w-[1200px] mx-auto h-20 fixed top-0 left-[50%] -translate-x-[50%] w-full">
            <Link to={'/'} className="flex items-center gap-2">
                <Icon />
                <p className={`font-mono text-xl text-opacity-70 text-black`}>Carwashio</p>
            </Link>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                    {
                        NavItem?.map((item, key) =>
                            <Link to={item?.link} key={key} className={`font-mono text-xl text-opacity-70 text-black`}>{item?.name}</Link>
                        )}
                </div>
                <Link to={'/slot'} className="capitalize bg-[#C6A7F1] text-black font-mono text-xl px-6 py-2 rounded-lg">
                    Book a slot
                </Link>
            </div>

            <div className="bg-gradient-to-r from-transparent via-black to-transparent h-[1px] w-full absolute bottom-0"></div>
        </div>
    );
};

export default Navbar;