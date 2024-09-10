import React, { useState } from 'react';
import { useAddServiceAdminMutation, useDeleteServiceAdminMutation, useServiceListAdminQuery, useUpdateServiceAdminMutation } from '../../components/rtk/Endpoint';
import LoadingModal from '../../components/ui/LoadingModal';
import { useForm } from 'react-hook-form';

export interface TService {
    _id?: string,
    name: string,
    description: string,
    price: number,
    duration: number,
    isDeleted: boolean,
}


const ServiceManagement = () => {
    const { data, isFetching } = useServiceListAdminQuery(undefined);
    const [addServiceModal, setAddServiceModal] = useState(false);
    const [DeleteClicked, setDeleteClicked] = useState<string | undefined>(undefined);
    const [updateService, setUpdatedService] = useState<TService | undefined>(undefined);
    const [triggerAddNewService, { isLoading }] = useAddServiceAdminMutation();
    const [triggerUpdateService, { isLoading: UpdateLoading }] = useUpdateServiceAdminMutation();
    const [triggerDeleteService, { isLoading: DeleteLoading }] = useDeleteServiceAdminMutation();
    const { register, handleSubmit, reset } = useForm<Partial<TService>>();

    const HandleAddNewService = (data: Partial<TService>) => {
        triggerAddNewService({ ...data, isDeleted: false });
        reset();
        setAddServiceModal(false);
    }

    const HandleUpdatedService = (data: Partial<TService>) => {
        const obj = {
            id: updateService?._id,
            body: data
        }
        triggerUpdateService(obj);
        reset();
        setUpdatedService(undefined);
    }

    return (
        <div className='max-w-[1200px] mx-auto m-5 p-5'>
            <LoadingModal isLoading={isFetching} />
            <LoadingModal isLoading={isLoading} />
            <LoadingModal isLoading={UpdateLoading} />
            <LoadingModal isLoading={DeleteLoading} />

            <button className="bg-lime-300 px-6 py-2 rounded-lg mb-5" onClick={() => setAddServiceModal(true)}>Add Service</button>
            {
                addServiceModal &&
                <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add new service!</h3>
                        <div className="py-4">
                            <form onSubmit={handleSubmit(HandleAddNewService)}>
                                <input type="text" {...register('name')} required placeholder='Name' className=' bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                <textarea {...register('description')} required placeholder='Description' className=' mt-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                <div className="flex items-center gap-3">
                                    <input type="number" {...register('duration', { valueAsNumber: true })} required placeholder='Duration' className=' flex-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                    <input type="number" {...register('price', { valueAsNumber: true })} required placeholder='Price' className=' flex-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                </div>

                                <div className="flex justify-center items-center mt-3 gap-3">
                                    <button type='submit' className="bg-lime-300 px-6 py-2 rounded-lg mb-5">Add Service</button>
                                    <button type='button' className="bg-red-300 px-6 py-2 rounded-lg mb-5" onClick={() => setAddServiceModal(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            }

            {
                updateService &&
                <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add new service!</h3>
                        <div className="py-4">
                            <form onSubmit={handleSubmit(HandleUpdatedService)}>
                                <input type="text" {...register('name')} defaultValue={updateService?.name} required placeholder='Name' className=' bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                <textarea {...register('description')} required defaultValue={updateService?.description} placeholder='Description' className=' mt-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                <div className="flex items-center gap-3">
                                    <input type="number" defaultValue={updateService?.duration} {...register('duration', { valueAsNumber: true })} required placeholder='Duration' className=' flex-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                    <input type="number" defaultValue={updateService?.price} {...register('price', { valueAsNumber: true })} required placeholder='Price' className=' flex-1 bg-white w-full p-3 rounded-lg bg-opacity-55 backdrop-blur-xl border-black border-[1px] border-opacity-30 outline-none' />
                                </div>

                                <div className="flex justify-center items-center mt-3 gap-3">
                                    <button type='submit' className="bg-lime-300 px-6 py-2 rounded-lg mb-5">Update Service</button>
                                    <button type='button' className="bg-red-300 px-6 py-2 rounded-lg mb-5" onClick={() => setUpdatedService(undefined)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            }

            {
                DeleteClicked &&
                <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Did you want to delete!</h3>
                        <div className="py-4">
                            <div className="flex justify-center items-center mt-3 gap-3">
                                <button onClick={() => {
                                    triggerDeleteService(DeleteClicked);
                                    setDeleteClicked(undefined);
                                }} type='button' className="bg-lime-300 px-6 py-2 rounded-lg mb-5">Delete Service</button>
                                <button type='button' className="bg-red-300 px-6 py-2 rounded-lg mb-5" onClick={() => setDeleteClicked(undefined)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </dialog>
            }

            <div className="overflow-x-auto bg-white rounded-lg">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Deleted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((item: TService, index: number) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.duration} Mins</td>
                                <td>{item?.price} TK</td>
                                <td>{item?.isDeleted === true ? 'Deleted' : 'Active'}</td>
                                <th>
                                    <button disabled={item?.isDeleted === true ? true : false} onClick={() => setUpdatedService(item)} className="btn btn-ghost btn-xs">Update</button>
                                    <button disabled={item?.isDeleted === true ? true : false} onClick={() => setDeleteClicked(item?._id)} className="btn btn-ghost btn-xs ml-3">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceManagement;