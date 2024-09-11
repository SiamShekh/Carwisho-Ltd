import Countdown from 'react-countdown';
import { useMyBookingQuery, useOnAuthStateUserQuery, useUpdateAccountInfoMutation } from '../../components/rtk/Endpoint';
import LoadingModal from '../../components/ui/LoadingModal';
import Lottie from 'lottie-react';
import car_anim from "../../assets/raw/car_anim.json";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TUser } from '../Admin/Dashboard';
interface TBooking {
    _id: string;
    customerId: TCustomer;
    serviceId: TService;
    slotId: TSlot;
    vehicleType: string;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
    __v: number;
}

interface TCustomer {
    _id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
}

interface TService {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number; // in minutes
    isDeleted: boolean;
    __v: number;
}

interface TSlot {
    _id: string;
    service: string; // Service ID
    startTime: string; // Format: HH:mm
    endTime: string;  // Format: HH:mm
    date: string; // Format: YYYY-MM-DD
    isBooked: string;
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
    __v: number;
}

const Dashboard = () => {
    const { data, isFetching } = useMyBookingQuery(undefined);
    const { data: Account, isFetching: fetch } = useOnAuthStateUserQuery(undefined);
    const [triggerUpdateAccount, { isLoading }] = useUpdateAccountInfoMutation();
    const passedEvents: TBooking[] = [];
    const upcomingEvents: TBooking[] = [];

    const getRecentUpcomingEvent = () => {

        data?.data?.forEach((event: TBooking) => {

            const currentDate = new Date();
            const targetDateTime = new Date(event?.slotId?.date + " " + event?.slotId?.startTime);

            if (currentDate > targetDateTime) {
                passedEvents.push(event);
            } else {
                upcomingEvents.push(event);
            }
        });

        upcomingEvents.sort((a, b) => new Date(a.slotId.date + " " + a?.slotId?.startTime).getTime() - new Date(b.slotId.date + " " + b?.slotId?.startTime).getTime());

        return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
    }

    const recentComming = getRecentUpcomingEvent();
    const recentTimeStamp = new Date(recentComming?.slotId.date + " " + recentComming?.slotId.startTime).getTime();

    const { register, handleSubmit, reset } = useForm<TUser>();
    const [isProfileEdit, setProfileEdit] = useState(false);
    const HandleUpdateAccount = (data: Partial<TUser>) => {
        triggerUpdateAccount(data);
        setProfileEdit(true);
        reset();
    }

    return (
        <div className='max-w-[1200px] mx-auto min-h-screen lg:mt-28 mt-20 m-5 p-5'>
            <LoadingModal isLoading={isFetching} />
            <LoadingModal isLoading={isLoading} />
            <LoadingModal isLoading={fetch} />

            {
                isProfileEdit &&
                <dialog id="my_modal_1" open className="modal">
                    <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">Update Account Info!</h3>
                        <form onSubmit={handleSubmit(HandleUpdateAccount)}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" {...register("name")} defaultValue={Account?.data?.name} className='bg-gray-200 p-3 w-full bg-opacity-40 border border-black border-opacity-35 rounded-xl' />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Address</span>
                                </div>
                                <input type="text" {...register("address")} defaultValue={Account?.data?.address} className='bg-gray-200 p-3 w-full bg-opacity-40 border border-black border-opacity-35 rounded-xl' />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Phone</span>
                                </div>
                                <input type="text" {...register("phone")} defaultValue={Account?.data?.phone} className='bg-gray-200 p-3 w-full bg-opacity-40 border border-black border-opacity-35 rounded-xl' />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">New Password</span>
                                </div>
                                <input type="text" {...register("newPassword")} placeholder='Type new password' className='bg-gray-200 p-3 w-full bg-opacity-40 border border-black border-opacity-35 rounded-xl' />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Current Password</span>
                                </div>
                                <input type="text" {...register("password")} placeholder='type currect passowrd' className='bg-gray-200 p-3 w-full bg-opacity-40 border border-black border-opacity-35 rounded-xl' />
                            </label>

                            <div className="flex justify-between items-center gap-4">
                                <button type="submit" className='bg-lime-400 p-3 w-full rounded-lg mt-5'>Update Account</button>
                                <button type="button" className='bg-lime-400 p-3 w-full rounded-lg mt-5' onClick={() => setProfileEdit(false)}>Cancel</button>

                            </div>
                        </form>
                    </div>
                </dialog>
            }

            <div className="flex items-center gap-4 justify-between bg-white bg-opacity-40 border border-black border-opacity-35 rounded-xl p-5 my-5">
                <div className="flex gap-3">
                    <img src="https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1ad9e12c908d182c891b03abc19988f4" className='size-10 rounded-full' />
                    <div className="">
                        <p className='font-bold'>{Account?.data?.name}</p>
                        <p>{Account?.data?.role}</p>
                    </div>
                </div>

                <div className="">
                    <button onClick={() => setProfileEdit(true)} className='bg-lime-400 px-6 py-1 rounded-full font-sans text-xl font-bold'>Edit</button>
                </div>
            </div>
            <div className="lg:grid grid-cols-3 gap-5 ">
                <div className="col-span-2">
                    {
                        passedEvents?.length ?
                            <>
                                <p>Completed slot</p>

                                <div className="col-span-2 bg-white bg-opacity-40 border border-black border-opacity-35 rounded-xl h-fit">
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Slot Time</th>
                                                    <th>Vehicle Type</th>
                                                    <th>Vehicle Brand</th>
                                                    <th>Registration Plate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    passedEvents.map((item, index) => <tr className={`capitalize`} key={index}>
                                                        <th>{index + 1}</th>
                                                        <td>{item?.serviceId?.name}</td>
                                                        <td>{item?.serviceId?.price}</td>
                                                        <td>{item?.slotId?.date} - ({item?.slotId?.startTime} - {item?.slotId?.endTime})</td>
                                                        <td>{item?.vehicleType}</td>
                                                        <td>{item?.vehicleBrand}</td>
                                                        <td>{item?.registrationPlate}</td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </> :
                            <p>There are no slots that you have booked or completed.</p>
                    }
                </div>

                <div className="col-span-1">
                    {
                        recentComming?.serviceId?.name as string ?
                            <>
                                <p>Upcomming slot</p>
                                <div className=" bg-white bg-opacity-40 border border-black border-opacity-35 rounded-xl h-fit p-5">
                                    <img src="" alt="" />
                                    <Lottie
                                        animationData={car_anim}
                                        loop={false}
                                    />
                                    <p className='font-sans text-xl font-bold text-center line-clamp-1'>{recentComming?.serviceId.name}</p>
                                    <p className='font-mono line-clamp-1'>Price: {recentComming?.serviceId.price}</p>
                                    <p className='font-mono line-clamp-1'>Duration: {recentComming?.serviceId.duration}</p>
                                    <div className="w-fit bg-white px-5 mx-auto rounded-2xl py-5 mt-5 border">
                                        <p className='font-mono text-2xl text-center font-bold'>
                                            {
                                                recentTimeStamp &&
                                                <Countdown date={recentTimeStamp} autoStart />

                                            }
                                        </p>
                                        <p className='font-mono text-xs text-center font-bold mt-5'>
                                            Day:Hour:Minute:Second
                                        </p>
                                    </div>
                                </div>
                            </> :
                            <p>There are no upcoming slots that you have booked.</p>
                    }

                </div>
            </div>

        </div>
    );
};

export default Dashboard;