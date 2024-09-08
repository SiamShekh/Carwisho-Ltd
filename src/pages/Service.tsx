import { FaFilter } from "react-icons/fa";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Service = () => {
    return (
        <div className=" mt-20 p-5">
            <div className="flex justify-between items-center py-5 lg:hidden">
                <p className="text-xl font-mono">Total Service: 000</p>
                <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-2 bg-lime-400 px-5 py-2 rounded-full ">Filter <FaFilter /></label>
            </div>

            <div className="drawer drawer-end z-30">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-2 w-fit bg-lime-400 p-4 my-3 rounded-full lg:hidden"><IoClose className="text-xl"/></label>

                        <div className="top-0 left-0 bg-white p-5 rounded-xl">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <input type="text" className="outline-none px-5 py-2 bg-white rounded-xl border" placeholder="search" />
                                <button type="submit" className="bg-lime-400 py-1 rounded-full w-fit px-8">Search</button>
                            </div>

                            <div className="divider">-</div>

                            <div className="">
                                <label>Price</label>
                                <div className="flex justify-between items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <input type="number" className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="min" />
                                        <input type="number" className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="max" />
                                        <button className="p-3 bg-[#E9E7E7] rounded-2xl">
                                            <FaFilterCircleDollar />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-5  gap-3">
                <div className="xl:col-span-1 lg:col-span-2 overflow-hidden hidden lg:block">
                    <div className="fixed top-46 left-0 bg-white p-5 rounded-r-xl max-w-64">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <input type="text" className="outline-none px-5 py-2 bg-white rounded-xl border" placeholder="search" />
                            <button type="submit" className="bg-lime-400 py-1 rounded-full w-fit px-8">Search</button>
                        </div>

                        <div className="divider">-</div>

                        {/* Need add many more acoding plan */}

                        <div className="">
                            <label>Price</label>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <input type="number" className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="min" />
                                    <input type="number" className="outline-none py-2 bg-white rounded-xl border w-16 pl-2" placeholder="max" />
                                    <button className="p-3 bg-[#E9E7E7] rounded-2xl">
                                        <FaFilterCircleDollar />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-3 col-span-5">
                    <div className="min-h-screen ">
                        <section>
                            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-5">

                                <div className="bg-white rounded-2xl p-2">
                                    <img src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg" alt="" className="rounded-2xl h-40 object-cover w-full" />
                                    <div className="p-2">
                                        <p className="font-mono text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, minus.</p>

                                        <div className="divider">-</div>

                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <p className="font-medium">Price: 598 TK</p>
                                                <p className="text-2xl">1 Hours</p>
                                            </div>

                                            <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-2">
                                    <img src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg" alt="" className="rounded-2xl h-40 object-cover w-full" />
                                    <div className="p-2">
                                        <p className="font-mono text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, minus.</p>

                                        <div className="divider">-</div>

                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <p className="font-medium">Price: 598 TK</p>
                                                <p className="text-2xl">1 Hours</p>
                                            </div>

                                            <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-2">
                                    <img src="https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg" alt="" className="rounded-2xl h-40 object-cover w-full" />
                                    <div className="p-2">
                                        <p className="font-mono text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, minus.</p>

                                        <div className="divider">-</div>

                                        <div className="flex justify-between items-center">
                                            <div className="">
                                                <p className="font-medium">Price: 598 TK</p>
                                                <p className="text-2xl">1 Hours</p>
                                            </div>

                                            <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;