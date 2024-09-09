import React, { useState } from 'react';
import { useCreateSlotsMutation, useServiceListQuery } from '../../components/rtk/Endpoint';
import LoadingModal from '../../components/ui/LoadingModal';
import { TService } from './ServiceManagement';
import { useForm } from 'react-hook-form';

interface TSlot {
    service: string,
    startTime: string,
    endTime: string,
    date: string,
    isBooked?: string
}

const SlotManagement = () => {
    const { data, isFetching } = useServiceListQuery(undefined);
    const [SelectedService, setSelectedService] = useState<string | undefined>(undefined);
    const { register, handleSubmit } = useForm<TSlot>();
    const [triggerSlot, { data: SlotData, isLoading: SlotCreatingLoading }] = useCreateSlotsMutation();

    const HandleCreateSlot = (payload: TSlot) => {
        triggerSlot({ ...payload, service: SelectedService })
    }

    ///admin/slots?serviceId=667364cd1715081e8bb70401

    return (
        <div className='max-w-[1200px] mx-auto'>
            <LoadingModal isLoading={isFetching} />
            <LoadingModal isLoading={SlotCreatingLoading} />
            <div className="flex justify-between gap-5">
                <div className="flex-1">
                    <div className="mt-3">
                        <p className='font-sans text-sm'>Create Slots: </p>
                        <div className="bg-white bg-opacity-60 border-black border-opacity-40 border-[1px] p-5 rounded-lg">
                            <form onSubmit={handleSubmit(HandleCreateSlot)} className=''>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Pick the service</span>
                                    </div>
                                    <select required onChange={(e) => {
                                        const a = data?.data?.filter((item: TService) => item?.name === e.target.value);
                                        console.log();
                                        setSelectedService(a[0]?._id);
                                    }} className="select select-bordered">
                                        <option disabled value={"Pick one"}>Pick one</option>
                                        {
                                            data?.data?.map((item: TService, index: string) =>
                                                <option key={index}>{item?.name}</option>
                                            )
                                        }
                                    </select>
                                </label>
                                <div className="flex items-center gap-5">
                                    <label className="form-control w-full flex-1">
                                        <div className="label">
                                            <span className="label-text">Start Time</span>
                                        </div>
                                        <input type="time" {...register('startTime')} required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <label className="form-control w-full flex-1">
                                        <div className="label">
                                            <span className="label-text">End Time</span>
                                        </div>
                                        <input type="time" {...register('endTime')} required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Pick a Date</span>
                                    </div>
                                    <input type="date" {...register('date')} required placeholder="Type here" className="input input-bordered w-full " />
                                </label>

                                <button type='submit' className='bg-lime-400 px-8 py-2  mx-auto mt-4 rounded-xl font-sans'>Create Slots</button>
                            </form>

                            {
                                SlotData?.data[0]?.startTime &&
                                <>
                                    <div className="divider">-</div>

                                    <div className="">
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        SlotData?.data?.map((item: TSlot, index: number) =>
                                                            <tr key={index}>
                                                                <th>{index + 1}</th>
                                                                <td>{item?.startTime}</td>
                                                                <td>{item?.endTime}</td>
                                                                <td>{item?.isBooked}</td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="mt-3">
                        <p className='font-sans text-sm'>All Slots: </p>
                        <div className="bg-white bg-opacity-60 border-black border-opacity-40 border-[1px] p-5 rounded-lg">
                            <form onSubmit={handleSubmit(HandleCreateSlot)} className=''>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Pick the service</span>
                                    </div>
                                    <select required onChange={(e) => {
                                        const a = data?.data?.filter((item: TService) => item?.name === e.target.value);
                                        console.log();
                                        setSelectedService(a[0]?._id);
                                    }} className="select select-bordered">
                                        <option disabled value={"Pick one"}>Pick one</option>
                                        {
                                            data?.data?.map((item: TService, index: string) =>
                                                <option key={index}>{item?.name}</option>
                                            )
                                        }
                                    </select>
                                </label>
                              

                            </form>

                            {
                                SlotData?.data[0]?.startTime &&
                                <>
                                    <div className="divider">-</div>

                                    <div className="">
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Start Time</th>
                                                        <th>End Time</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        SlotData?.data?.map((item: TSlot, index: number) =>
                                                            <tr key={index}>
                                                                <th>{index + 1}</th>
                                                                <td>{item?.startTime}</td>
                                                                <td>{item?.endTime}</td>
                                                                <td>{item?.isBooked}</td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlotManagement;