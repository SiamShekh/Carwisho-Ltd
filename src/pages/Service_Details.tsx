import { Link, useParams } from "react-router-dom";
import { useSingleServiceDataQuery, useSlotInformissionQuery } from "../components/rtk/Endpoint";
import LoadingModal from "../components/ui/LoadingModal";
import { useState } from "react";

interface TSlot {
    _id: string
    service: string,
    startTime: string,
    endTime: string,
    date: string,
    isBooked?: string
}

const Service_Details = () => {
    const id = useParams().id;
    const { data, isLoading } = useSingleServiceDataQuery(id);
    const dateLocal = new Date();
    const dt = dateLocal.getFullYear() + "-"
        + String(dateLocal.getMonth()).padStart(2, '0')+ "-"
        + String(dateLocal.getDate() + 1).padStart(2, '0') ;
        
    const [date, setDate] = useState(dt);
    
    const [slot_selected, setSlotSelected] = useState("");
    const { data: SlotInfo, isLoading: SlotLoading } = useSlotInformissionQuery({ date, service: id });

    return (
        <div className="min-h-screen max-w-[1200px] mx-auto lg:mt-28 mt-20 p-5">
            <LoadingModal isLoading={isLoading} />
            <LoadingModal isLoading={SlotLoading} />
            <div className="p-5 bg-white rounded-lg w-full">
                <p className="font-bold text-xl"># {data?.data?.name}</p>
                <p className="font-mono">{data?.data?.description}</p>
                <div className="flex justify-between items-center mb-3 md:flex-row-reverse flex-col">
                    <div className="">
                        <div className="badge badge-secondary mr-3">{data?.data?.price} TK</div>
                        <div className="badge badge-accent">{data?.data?.duration} Mins</div>
                    </div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text capitalize">pick a date?</span>
                        </div>
                        <input onChange={(e) => setDate(e.target.value)} type="date" defaultValue={date} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                {
                    slot_selected &&
                    <Link to={`/booking/${slot_selected}`} className="bg-lime-500 px-5 py-1 rounded-full font-bold mt-3">Add this service</Link>
                }

            </div>
            {
                SlotInfo?.message === "No Data Found!" && <p className="font-mono text-2xl font-bold mt-5 text-center">Ah, there are no available slots for this date or service. change the date or pick new one</p>
            }

            <div className="overflow-x-auto bg-white my-5 p-5 rounded-lg ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Availability</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            SlotInfo?.data?.map((item: TSlot) =>
                                <tr>
                                    <td>{item?.date}</td>
                                    <td className="capitalize">{item?.isBooked}</td>
                                    <td>{item?.startTime}</td>
                                    <td>{item?.endTime}</td>
                                    <th className={``}>
                                        <button disabled={item?.isBooked == 'booked' ? true : false} onClick={() => setSlotSelected(item?._id)} className={`btn btn-ghost btn-xs '}`}>Book this slot</button>
                                    </th>
                                </tr>
                            )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Service_Details;