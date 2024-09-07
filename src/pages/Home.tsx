import Lottie from "lottie-react";
import car_anim from "../assets/raw/car_anim.json";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <section className="">
                <div className="flex justify-between items-center min-h-screen max-w-[1200px] mx-auto md:flex-row flex-col pt-20 p-5">
                    <div className="">
                        <Lottie
                            animationData={car_anim}
                            loop={false}
                        />
                    </div>
                    <div className="">
                        <p className="lg:text-7xl md:text-6xl font-bold text-3xl">Keep Your <span className="md:block text-[#955CE6]">Car Clean</span> Always</p>
                        <p className="mt-5 lg:text-sm md:text-xs">Carwashio wash is a brand which is  literally  going <span className="lg:block">to change the people  thing car cleaning.</span></p>

                        <Link to={'/'} className="flex items-center gap-2 text-[#955CE6] mt-3">Book a wash <FaArrowRight /></Link>
                    </div>

                </div>
            </section>

            <section>
                <div className="bg-black">
                    <div className="max-w-[1200px] mx-auto py-10 relative p-5">
                        <p className="text-white text-4xl font-bold">Based On <span className="text-[#955CE6]">Experience</span></p>

                        <div className="md:grid grid-cols-3 gap-3 mt-10">
                            <div className="">
                                <img src="https://img.freepik.com/free-photo/worker-car-detailing-cleaning-car-with-microfiber_1303-30578.jpg" alt="" className="w-full h-4/5 object-cover" />
                            </div>
                            <div className="col-span-2">
                                <div className="md:flex hidden items-center gap-3">
                                    <img src="https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193616.jpg" alt="" className="w-40 object-cover flex-1" />
                                    <img src="https://img.freepik.com/free-photo/close-up-car-care-washing_23-2149172897.jpg" alt="" className="w-40 object-cover flex-1" />
                                </div>
                                <div className="flex gap-3 flex-col mt-5">
                                    <p className="text-white text-3xl">Our Statistics</p>
                                    <div className="flex items-center gap-2 text-white">
                                        <FaCheck className="text-green-500" />
                                        <p>We have more then 10 years expreance</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <FaCheck className="text-green-500" />
                                        <p>We have more then 10 years expreance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;