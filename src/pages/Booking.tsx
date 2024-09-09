import { useParams } from "react-router-dom";
import { useOnAuthStateUserQuery, useSingleSlotInformissionQuery } from "../components/rtk/Endpoint";
import LoadingModal from "../components/ui/LoadingModal";

const Booking = () => {
    const id = useParams().id;
    const { data, isLoading } = useSingleSlotInformissionQuery(id);
    const { data: UserData, isLoading: UserLoading } = useOnAuthStateUserQuery(undefined);
    console.log(UserData);

    return (
        <div className="min-h-screen mt-28 p-5 max-w-[1200px] mx-auto">
            <LoadingModal isLoading={isLoading} />
            <LoadingModal isLoading={UserLoading} />
            <div className="flex justify-between gap-5 flex-col md:flex-row">

                <div className="flex-1">
                    <p className="text-xl">Service Info</p>
                    <div className="p-5 bg-white rounded-lg mt-1 backdrop-blur-2xl bg-opacity-50 border border-black border-opacity-10 flex gap-3 items-center">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/493/595/small_2x/3d-question-mark-icon-or-ask-faq-answer-solution-isolated-on-transparent-background-file-png.png" alt="profile" className="size-14 rounded-full" />
                        <div className="">
                            <p className="font-bold">{data?.data?.service?.name}</p>
                            <p className="font-xs line-clamp-1">{data?.data?.service?.description}</p>
                            <p className="font-sm">Time: {data?.data?.startTime + " - " + data?.data?.endTime}</p>
                            <p>
                                {/* <div className="badge badge-secondary">{data?.data?.service?.price} TK</div> */}
                                <div className="badge badge-accent ml-3">{data?.data?.service?.duration} MIns</div>
                            </p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="text-xl">Slot Info</p>
                        <div className="mt-1 p-5 bg-white rounded-lg backdrop-blur-2xl bg-opacity-50 border border-black border-opacity-10  ">
                            <div className="gap-3 items-center  flex ">
                                <div className="flex-1">
                                    <img src="https://gtbank-uk.transforms.svdcdn.com/production/business-banking/banner-img-bb-corporate-cards@2x.png?w=700&q=100&fm=webp&fit=clip&dm=1589467121&s=583ae4a4510c68b023054a18b45ec798" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center font-bold text-xl">
                                        <p>Sub Total: </p>
                                        <p>{data?.data?.service?.price} TK</p>
                                    </div>
                                    <div className="flex justify-between items-center font-bold text-xl">
                                        <p>Fess: </p>
                                        <p>0 TK</p>
                                    </div>
                                    <div className="flex justify-between items-center font-bold text-xl">
                                        <p>Discount: </p>
                                        <p>0%</p>
                                    </div>
                                </div>

                            </div>
                            <div className="h-[1px] w-full bg-gray-400 mt-5"></div>

                            <button className="bg-lime-400 w-full py-3 mt-5 rounded-full text-xl font-bold">Pay Now</button>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <p className="text-xl">Billing address</p>
                    <div className="p-5 bg-white rounded-lg mt-1 backdrop-blur-2xl bg-opacity-50 border border-black border-opacity-10 flex gap-3 items-center">
                        <img src="https://cdn.prod.website-files.com/5e6b63ac3b6e2522d1889f4a/63b58a00f6d3905f21353830_nfts3.jpg" alt="profile" className="size-14 rounded-full" />
                        <div className="">
                            <p className="font-bold">{UserData?.data?.name}</p>
                            <p className="font-sm">{UserData?.data?.phone}</p>
                            <p className="font-sm">{UserData?.data?.email}</p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="text-xl">Vehicle Info</p>
                        <div className="p-5 bg-white rounded-lg mt-1 backdrop-blur-2xl bg-opacity-50 border border-black border-opacity-10  gap-3 items-center grid grid-cols-2 ">
                            <div className=" flex gap-2">
                                <input type="text" placeholder="Vehicle Type" className="outline-none p-3 rounded-lg bg-gray-200 w-full" />
                            </div>
                            <div className=" flex gap-2">
                                <input type="text" placeholder="Vehicle Brand" className="outline-none p-3 rounded-lg bg-gray-200 w-full" />
                            </div>
                            <div className=" flex gap-2">
                                <input type="text" placeholder="Vehicle Model" className="outline-none p-3 rounded-lg bg-gray-200 w-full" />
                            </div>
                            <div className=" flex gap-2">
                                <input type="text" placeholder="Manufacturing Year" className="outline-none p-3 rounded-lg bg-gray-200 w-full" />
                            </div>
                            <div className="col-span-2 flex gap-2">
                                <input type="text" placeholder="Registration Plate" className="outline-none p-3 rounded-lg bg-gray-200 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;