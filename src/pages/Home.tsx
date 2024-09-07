import Lottie from "lottie-react";
import car_anim from "../assets/raw/car_anim.json";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import car_racing from "../assets/image/car_racing.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaArrowPointer } from "react-icons/fa6";

const ServiceCategory = ({ link, name }: { link: string, name: string }) => {
    return <div className="bg-white relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
        <p className="bg-[#C6A7F1] text-black text-xl w-fit">Car Washing</p>
        <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-cleaning-service-illustration-download-in-svg-png-gif-file-formats--washing-dry-wash-clean-up-soap-bubble-pack-people-illustrations-4453456.png?f=webp"} alt={name} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
        <div className="flex items-center gap-3 bottom-5 absolute">
            <div className="text-lime-700 bg-black p-2 text-xl rounded-full"><FaArrowPointer /></div>
            <p className="text-lime-700">Learn More</p>
        </div>

    </div>;
}


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

            <section>
                <div className="min-h-screen max-w-[1200px] mx-auto p-5">
                    <p className="text-5xl font-bold text-center">Our Service</p>

                    <div className="grid md:grid-cols-2 gap-5 mt-5">

                        <div className="bg-white relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-[#C6A7F1] text-black text-xl w-fit">Car Washing</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-cleaning-service-illustration-download-in-svg-png-gif-file-formats--washing-dry-wash-clean-up-soap-bubble-pack-people-illustrations-4453456.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <div className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-lime-700 bg-black p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-lime-700">Learn More</p>
                            </div>
                        </div>

                        <div className="bg-black relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-white text-black text-xl w-fit">Repair and Maintenance</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-repair-service-illustration-download-in-svg-png-gif-file-formats--maintenance-repairman-mechanics-guard-auto-pack-services-illustrations-4683811.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <div className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-black bg-white p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-white">Learn More</p>
                            </div>
                        </div>

                        <div className="bg-black relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-white text-black text-xl w-fit">Tire and Wheel Services</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-mechanics-changing-tire-illustration-download-in-svg-png-gif-file-formats--tyre-change-service-man-male-mechanic-repairman-repair-pack-services-illustrations-2809551.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <div className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-black bg-white p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-white">Learn More</p>
                            </div>
                        </div>

                        <div className="bg-white relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-[#C6A7F1] text-black text-xl w-fit">Electrical and Diagnostics</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/man-doing-battery-recharge-illustration-download-in-svg-png-gif-file-formats--charging-mobile-cell-car-service-pack-vehicle-illustrations-9739643.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <div className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-lime-700 bg-black p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-lime-700">Learn More</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="min-h-screen py-10 max-w-[1200px] mx-auto p-5">
                    <p className="text-blue-950 text-4xl text-center font-bold">What you want to say?</p>
                    <p className="text-sm text-center mt-3">Our client sent us a bunch of smiles in appreciation of our service, <span className="block">and we love it!</span></p>
                    <div className="h-64 w-full relative">
                        <div className="flex justify-between items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTYN6BK8Yu9rSdsN8IER1O6Wg3Hri9ksdew&s" alt="" className="size-14 rounded-full mt-10" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFc2aAoUSaSi1kWP1pMzWmWOGR_s6EjsigQ&s" alt="" className="size-10 rounded-full" />
                        </div>
                        <div className="flex justify-evenly mt-10">
                            <img src="https://pbs.twimg.com/profile_images/1659678671873949697/BZZA2H9h_400x400.jpg" alt="" className="size-8 rounded-full" />
                            <img src="https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg" alt="" className="size-6 rounded-full mt-10" />
                        </div>

                        <img src="https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg" alt="" className="size-20 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                    </div>

                    <form className="max-w-md bg-white rounded-2xl h-40 mx-auto p-5 relative">
                        <textarea className="w-full outline-none h-full" placeholder="Write what you want to say to other people." />
                        <button className="bg-lime-400 px-8 py-2 rounded-full font-bold absolute bottom-5 left-[50%] -translate-x-[50%]">Submit</button>

                        <div className="bg-black w-full h-full absolute top-0 left-0 rounded-2xl bg-opacity-80">
                            <Link to={'#'} className="bg-lime-400 px-8 py-2 h-fit rounded-full font-bold absolute bottom-5 left-[50%] -translate-x-[50%]">Login</Link>
                        </div>
                    </form>
                    <div className="mx-auto text-center">
                        <Link to={'#'} className="text-lime-900 font-bold text-xl">See All Reviews</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;