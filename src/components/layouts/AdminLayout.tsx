import { Link, Outlet, useLocation } from 'react-router-dom';
import Icon from '../template/Icon';
import { IoClose } from 'react-icons/io5';
import { GrDashboard } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { TbBrandBooking } from 'react-icons/tb';
import { SlNote } from 'react-icons/sl';
import { FcServices } from 'react-icons/fc';
import { useOnAuthStateUserQuery } from '../rtk/Endpoint';

const AdminLayout = () => {
    const location = useLocation().pathname;
    const { data } = useOnAuthStateUserQuery(undefined);

    const NavList = [
        {
            link: '/admin/dashboard',
            icon: <GrDashboard />,
            name: 'Dashboard'
        },
        {
            link: '/admin/user',
            name: 'User',
            icon: <BiUser />
        },
        {
            link: '/admin/booking',
            name: 'Booking',
            icon: <TbBrandBooking />
        },
        {
            link: '/admin/slot',
            name: 'Slot',
            icon: <SlNote />

        },
        {
            link: '/admin/service',
            name: 'Service',
            icon: <FcServices />

        },
    ];

    return (
        <div className='min-h-screen'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 flex items-center gap-2">
                            <Icon />Carwashio
                        </div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal items-center">
                                {
                                    NavList?.map((item, index: number) =>
                                        <Link key={index} className={`${location === item?.link && 'font-mono text-xl font-bold text-lime-500'} font-sans text-sm mr-4`} to={item?.link}>{item?.name}</Link>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side">
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="text-xl bg-gradient-to-br from-[#C6A7F1] to-blue-500 w-fit p-2 rounded-xl skew-x-6">
                                <label htmlFor="my-drawer-3">
                                    <IoClose />
                                </label>
                            </div>
                            <p className="font-mono text-xl text-transparent bg-gradient-to-br from-[#955CE6] to-blue-500 bg-clip-text">Carwashio</p>
                        </div>

                        <div className="py-5 flex items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="" className="size-8 rounded-full border border-black" />

                            <div className="">
                                <p className="text-sm font-bold capitalize">{data?.data?.name}</p>
                                <p className="text-xs font-mono">{data?.data?.role}</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-black mb-3"></div>

                        {
                            NavList?.map((item, key) =>
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

                {/* <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {
                            NavList?.map((item, index: number) =>
                                <Link key={index} className={`${location === item?.link && 'font-mono text-xl font-bold'} font-serif text-xl`} to={item?.link}>{item?.name}</Link>)
                        }

                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default AdminLayout;