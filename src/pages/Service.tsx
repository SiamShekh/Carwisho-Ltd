import { FaFilter } from "react-icons/fa";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useServiceListQuery } from "../components/rtk/Endpoint";
import LoadingModal from "../components/ui/LoadingModal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TService {
    _id: string
    name: string,
    description: string,
    price: number,
    duration: number,
    isDeleted: boolean,
}

interface TFilter {
    searchTerm?: string,
    maxPrice?: string,
    minPrice?: string,
    sort?: string,
    dsc?: string,
}

interface TFilterMobile {
    searchTermMobile?: string,
    maxPriceMobile?: string,
    minPriceMobile?: string,
    sortMobile?: string,
    dscMobile?: string,
}

const Service = () => {
    const [Filter, setFilter] = useState<TFilter | string>("");
    const { isLoading, data } = useServiceListQuery(Filter);
    const { register, handleSubmit } = useForm<TFilter, TFilterMobile>();

    const HandleFilter = (data: TFilter) => {
        setFilter(data)
    }


    const HandleFilterMobile = (data: TFilterMobile) => {
        const dataObj = {
            searchTerm: data?.searchTermMobile,
            maxPrice: data?.maxPriceMobile,
            minPrice: data?.minPriceMobile,
            sort: data?.sortMobile,
            dsc: data?.dscMobile,
        }

        setFilter(dataObj)
    }

    return (
        <div className=" mt-20 p-5">
            <LoadingModal isLoading={isLoading} />
            <div className="flex justify-between items-center py-5 lg:hidden">
                <p className="text-xl font-mono">Total Service: {data?.data?.length}</p>
                <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-2 bg-lime-400 px-5 py-2 rounded-full ">Filter <FaFilter /></label>
            </div>

            <div className="drawer drawer-end z-30">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-2 w-fit bg-lime-400 p-4 my-3 rounded-full lg:hidden"><IoClose className="text-xl" /></label>

                        <form onSubmit={handleSubmit(HandleFilterMobile)} className="top-0 left-0 bg-white p-5 rounded-xl">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <input type="text" {...register('searchTermMobile')} className="outline-none px-5 py-2 bg-white rounded-xl border" placeholder="search" />
                                <button type="submit" className="bg-lime-400 py-1 rounded-full w-fit px-8">Search</button>
                            </div>

                            <div className="divider">-</div>


                            <div className="">
                                <label>Price</label>
                                <div className="flex justify-between items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <input type="number" {...register('minPriceMobile')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="min" />
                                        <input type="number" {...register('maxPriceMobile')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="max" />
                                        <button className="p-3 bg-[#E9E7E7] rounded-2xl" type="submit">
                                            <FaFilterCircleDollar />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <label>Sort</label>
                                <div className="flex justify-between items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <select defaultValue={"Duration"} {...register('sortMobile')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2">
                                            <option disabled value={"Duration"}>Duration</option>
                                            <option>Duration</option>
                                            <option>Price</option>
                                        </select>
                                        <select defaultValue={"DSC"} {...register('dscMobile')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2">
                                            <option disabled value={"DSC"}>DSC</option>
                                            <option>DSC</option>
                                            <option>ASC</option>
                                        </select>
                                        <button className="p-3 bg-[#E9E7E7] rounded-2xl" type="submit">
                                            <FaFilterCircleDollar />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5  gap-3">
                <div className="xl:col-span-1 lg:col-span-2 overflow-hidden hidden lg:block">
                    <form onSubmit={handleSubmit(HandleFilter)} className="fixed top-46 left-0 bg-white p-5 rounded-r-xl max-w-64">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <input type="text" {...register('searchTerm')} className="outline-none px-5 py-2 bg-white rounded-xl border" placeholder="search" />
                            <button type="submit" className="bg-lime-400 py-1 rounded-full w-fit px-8">Search</button>
                        </div>

                        <div className="divider">-</div>


                        <div className="">
                            <label>Price</label>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <input type="number" {...register('minPrice')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="min" />
                                    <input type="number" {...register('maxPrice')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="max" />
                                    <button className="p-3 bg-[#E9E7E7] rounded-2xl" type="submit">
                                        <FaFilterCircleDollar />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label>Sort</label>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <select defaultValue={"Duration"} {...register('sort')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2">
                                        <option disabled value={"Duration"}>Duration</option>
                                        <option>Duration</option>
                                        <option>Price</option>
                                    </select>
                                    <select defaultValue={"DSC"} {...register('dsc')} className="outline-none py-2 bg-white rounded-xl border w-16 pl-2">
                                        <option disabled value={"DSC"}>DSC</option>
                                        <option>DSC</option>
                                        <option>ASC</option>
                                    </select>
                                    <button className="p-3 bg-[#E9E7E7] rounded-2xl" type="submit">
                                        <FaFilterCircleDollar />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="xl:col-span-4 lg:col-span-3 col-span-5">
                    <div className="min-h-screen ">
                        <section>
                            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-5">

                                {
                                    data?.data?.map((item: TService, index: number) =>
                                        <div key={index} className="bg-white rounded-2xl p-2">
                                            <img src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg" alt="" className="rounded-2xl h-40 object-cover w-full" />
                                            <div className="p-2">
                                                <p className="text-sm">{item?.name}</p>
                                                <p className="font-mono text-xs line-clamp-3">{item?.description}</p>

                                                <div className="divider">-</div>

                                                <div className="flex justify-between items-center">
                                                    <div className="">
                                                        <p className="font-medium">Price: {item?.price} TK</p>
                                                        <p className="text-2xl">{item?.duration} Mins</p>
                                                    </div>

                                                    <Link to={`/service/${item?._id}`} className="bg-lime-400 px-6 h-fit py-2 rounded-full">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;