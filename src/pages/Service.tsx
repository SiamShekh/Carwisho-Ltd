const Service = () => {
    return (
        <div className="grid grid-cols-5  gap-10">
            <div className="col-span-1 overflow-hidden mt-28">
                <div className="fixed top-32 left-0 bg-white p-5 rounded-r-xl">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <input type="text" className="outline-none px-5 py-2 bg-white rounded-xl border max-w-sm" placeholder="search"/>
                        <button type="submit" className="bg-lime-400 py-1 rounded-full w-fit px-8">Search</button>
                    </div>

                    <div className="divider">-</div>

                    {/* Need add many more acoding plan */}
                </div>
            </div>
            <div className="col-span-4">
                <div className="min-h-screen pt-28">
                    <section>
                        <div className="grid grid-cols-4 gap-5">

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

                                        <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View more</button>
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

                                        <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View more</button>
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

                                        <button className="bg-lime-400 px-6 h-fit py-2 rounded-full">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Service;