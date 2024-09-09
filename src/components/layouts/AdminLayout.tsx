import { Link, Outlet, useLocation } from 'react-router-dom';
import Icon from '../template/Icon';

const AdminLayout = () => {
    const location = useLocation().pathname;
    const NavList = [
        {
            link: '/admin/dashboard',
            name: 'Dashboard'
        },
        {
            link: '/admin/user',
            name: 'User'
        },
        {
            link: '/admin/booking',
            name: 'Booking'
        },
        {
            link: '/admin/slot',
            name: 'Slot'
        },
        {
            link: '/admin/service',
            name: 'Service'
        },
    ]
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
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            NavList?.map((item, index: number) =>
                                <Link key={index} className={`${location === item?.link && 'font-mono text-xl font-bold'} font-serif text-xl`} to={item?.link}>{item?.name}</Link>)
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;