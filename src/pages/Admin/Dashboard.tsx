import { CgUser } from 'react-icons/cg';
import { useAdminDashboardQuery } from '../../components/rtk/Endpoint';
import LoadingModal from '../../components/ui/LoadingModal';
import { FcServices } from 'react-icons/fc';
import { MdEventAvailable } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';

export interface TUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    role: "admin" | "user",
    address: string,
};

const Dashboard = () => {

    const { data, isLoading } = useAdminDashboardQuery(undefined);

    return (
        <div className='p-5 max-w-[1200px] mx-auto'>
            <LoadingModal isLoading={isLoading} />

            {
                isLoading ?
                    <div className="grid grid-cols-4 gap-8 w-full">
                        <div className="skeleton w-full h-28 bg-white p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]"></div>
                        <div className="skeleton w-full h-28 bg-white p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]"></div>
                        <div className="skeleton w-full h-28 bg-white p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]"></div>
                        <div className="skeleton w-full h-28 bg-white p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]"></div>
                    </div> :
                    <div className="grid grid-cols-4 gap-8 w-full">
                        <div className={`bg-white w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px] flex justify-between items-center`}>
                            <div className="">
                                <p className='font-sans font-bold'>Total User</p>
                                <div className="text-xl bg-purple-600 p-2 mt-2 rounded-xl text-white w-fit">
                                    <CgUser className='text-3xl rounded-xl text-black' />
                                </div>
                            </div>

                            <p className='font-sans text-4xl font-bold'>{data?.data?.count?.user}</p>
                        </div>

                        <div className={`bg-white w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px] flex justify-between items-center`}>
                            <div className="">
                                <p className='font-sans font-bold'>Total Active Services</p>
                                <div className="text-xl bg-lime-600 p-2 mt-2 rounded-xl text-white w-fit">
                                    <FcServices className='text-3xl rounded-xl text-black' />
                                </div>
                            </div>

                            <p className='font-sans text-4xl font-bold'>{data?.data?.count?.service}</p>
                        </div>

                        <div className={`bg-white w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px] flex justify-between items-center`}>
                            <div className="">
                                <p className='font-sans font-bold'>Total availability slot</p>
                                <div className="text-xl bg-yellow-600 p-2 mt-2 rounded-xl text-white w-fit">
                                    <MdEventAvailable className='text-3xl rounded-xl text-black' />
                                </div>
                            </div>

                            <p className='font-sans text-4xl font-bold'>{data?.data?.count?.slot}</p>
                        </div>

                        <div className={`bg-white w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px] flex justify-between items-center`}>
                            <div className="">
                                <p className='font-sans font-bold'>Total Booking</p>
                                <div className="text-xl bg-cyan-600 p-2 mt-2 rounded-xl text-white w-fit">
                                    <TbBrandBooking className='text-3xl rounded-xl text-black' />
                                </div>
                            </div>

                            <p className='font-sans text-4xl font-bold'>{data?.data?.count?.booking}</p>
                        </div>
                    </div>
            }

            <div className="mt-5">
                <p className='font-sans'>Recent 5 User</p>
                <div className="grid grid-cols-3 gap-5">
                    {
                        data?.data?.data?.user?.map((item: TUser, index: number) => <div key={index} className="p-5 bg-white rounded-lg mt-1 backdrop-blur-2xl bg-opacity-50 border border-black border-opacity-10 flex gap-3 items-center">
                            <img src="https://cdn.prod.website-files.com/5e6b63ac3b6e2522d1889f4a/63b58a00f6d3905f21353830_nfts3.jpg" alt="profile" className="size-14 rounded-full" />
                            <div className="">
                                <p className="font-bold">{item?.name}</p>
                                <p className="font-sm">{item?.phone}</p>
                                <p className="font-sm">{item?.email}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;