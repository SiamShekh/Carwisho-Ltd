import { Link, useLocation } from "react-router-dom";
import Icon from "../template/Icon";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdLogIn } from "react-icons/io";
import { RiCarWashingFill } from "react-icons/ri";

const Navbar = () => {
    const NavItem = [
        {
            id: 1,
            name: "Service",
            icon: <RiCarWashingFill />,
            link: "/service",
        },
        {
            id: 2,
            name: "Booking",
            icon: <TbBrandBooking />,
            link: "/booking",
        },
        {
            id: 2,
            name: "Login",
            icon: <IoMdLogIn />,
            link: "/login",
        },
    ];

    const location = useLocation().pathname;


    return (
        <div className="flex justify-between bg-gray-200 items-center max-w-[1200px] mx-auto h-20 fixed top-0 left-[50%] -translate-x-[50%] w-full p-5">
            <div className="text-xl mr-5">
                <label htmlFor="my-drawer">
                    <CiMenuBurger />
                </label>
            </div>
            <Link to={'/'} className="flex items-center gap-2">
                <Icon />
                <p className={`font-mono text-xl text-opacity-70 text-black`}>Carwashio</p>
            </Link>

            <div className="items-center gap-5 hidden lg:flex">
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



            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="text-xl bg-gradient-to-br from-[#C6A7F1] to-blue-500 w-fit p-2 rounded-xl skew-x-6">
                                <label htmlFor="my-drawer">
                                    <IoClose />
                                </label>
                            </div>
                            <p className="font-mono text-xl text-transparent bg-gradient-to-br from-[#955CE6] to-blue-500 bg-clip-text">Carwashio</p>
                        </div>

                        <div className="py-5 flex items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="" className="size-8 rounded-full border border-black" />

                            <div className="">
                                <p className="text-sm font-bold capitalize">anonymous</p>
                                <p className="text-xs font-mono">anonymous</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-black mb-3"></div>
                      
                        {
                            NavItem?.map((item, key) => 
                                location === item?.link ?
                                    <Link to={item?.link} key={key} className="flex items-center gap-2 text-xl bg-[#C6A7F1] p-2 rounded-lg my-3">
                                        {item?.icon}
                                        <p>{item?.name}</p>
                                    </Link> :
                                    <Link to={item?.link} key={key} className="flex items-center gap-2 text-xl">
                                        {item?.icon}
                                        <p className="font-mono">{item?.name}</p>
                                    </Link>
                            )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;