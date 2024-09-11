import Lottie from "lottie-react";
import car_anim from "../assets/raw/car_anim.json";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaQuoteLeft } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { useCreateAReviewMutation, useGetReviewQuery, useOnAuthStateUserQuery } from "../components/rtk/Endpoint";
import { useForm } from "react-hook-form";
import LoadingModal from "../components/ui/LoadingModal";
interface TReview { review: string }

const Home = () => {
    const { data, isFetching } = useOnAuthStateUserQuery(undefined);
    const { data: ReviewData, isFetching: ReviewFetchingData } = useGetReviewQuery(undefined);
    const { register, handleSubmit, reset } = useForm<TReview>();
    const [triggerReview, { isLoading }] = useCreateAReviewMutation();

    const HandleReviewSubmit = (form_data: TReview) => {
        triggerReview({ ...form_data, user: data?.data?._id });
        reset();
    }

    return (
        <div>
            <LoadingModal isLoading={isFetching} />
            <LoadingModal isLoading={isLoading} />
            <LoadingModal isLoading={ReviewFetchingData} />
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

                        <Link to={'/service'} className="flex items-center gap-2 text-[#955CE6] mt-3">Book a wash <FaArrowRight /></Link>
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
                                        <p>We have more then 100 team member</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <FaCheck className="text-green-500" />
                                        <p>We clean 1000+ car</p>
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
                            <Link to={'/service'} className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-lime-700 bg-black p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-lime-700">Learn More</p>
                            </Link>
                        </div>

                        <div className="bg-black relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-white text-black text-xl w-fit">Repair and Maintenance</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-repair-service-illustration-download-in-svg-png-gif-file-formats--maintenance-repairman-mechanics-guard-auto-pack-services-illustrations-4683811.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <Link to={'/service'} className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-black bg-white p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-white">Learn More</p>
                            </Link>
                        </div>

                        <div className="bg-black relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-white text-black text-xl w-fit">Tire and Wheel Services</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/car-mechanics-changing-tire-illustration-download-in-svg-png-gif-file-formats--tyre-change-service-man-male-mechanic-repairman-repair-pack-services-illustrations-2809551.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <Link to={'/service'} className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-black bg-white p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-white">Learn More</p>
                            </Link>
                        </div>

                        <div className="bg-white relative  rounded-2xl h-72 p-5 border border-black border-b-8   ">
                            <p className="bg-[#C6A7F1] text-black text-xl w-fit">Electrical and Diagnostics</p>
                            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/man-doing-battery-recharge-illustration-download-in-svg-png-gif-file-formats--charging-mobile-cell-car-service-pack-vehicle-illustrations-9739643.png?f=webp"} alt={"car wash"} className="object-cover h-60 absolute top-[50%] -translate-y-[50%] right-0" />
                            <Link to={'/service'} className="flex items-center gap-3 bottom-5 absolute">
                                <div className="text-lime-700 bg-black p-2 text-xl rounded-full"><FaArrowPointer /></div>
                                <p className="text-lime-700">Learn More</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="py-10 max-w-[1200px] mx-auto p-5">
                    <p className="text-black text-opacity-60 text-center font-mono text-xl">Testimonial</p>
                    <p className="text-black text-center font-mono text-2xl mt-3">Transformative Client Experience</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        <div className="p-5 bg-white rounded-2xl relative pb-20">
                            <FaQuoteLeft className="text-4xl text-gray-500 my-3" />
                            <p className="text-xl">{ReviewData?.data[0]?.review}</p>

                            <div className="absolute bottom-0 left-0 bg-[#E9E7E7] px-5 py-2 rounded-bl-2xl rounded-tr-2xl">
                                <div className="flex items-center gap-3">
                                    <img src="https://i.pinimg.com/75x75_RS/11/c2/72/11c27232c3821e35e72935fbb8f4720a.jpg" alt="" className="size-10 rounded-full" />

                                    <div className="">
                                        <p className="text-xl font-bold">{ReviewData?.data[0]?.user?.name}</p>
                                        <p className="text-sm capitalize">{ReviewData?.data[0]?.user?.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(HandleReviewSubmit)} className="p-5 bg-white rounded-2xl relative pb-24">
                            <FaQuoteLeft className="text-4xl text-gray-500 my-3" />
                            <textarea {...register('review')} className="text-sm outline-none w-full h-full" placeholder="write a feedback" />

                            <button type="submit" className="bg-lime-500 px-8 py-2 rounded-full absolute bottom-5 left-[50%] -translate-x-[50%]">Submit</button>

                            <div className={`${data?.data?._id && 'hidden'} absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full rounded-2xl`}>
                                <Link to={'/auth/login'} className="bg-lime-500 px-10 font-bold py-2 rounded-full absolute bottom-5 left-[50%] -translate-x-[50%]">Login</Link>
                            </div>
                        </form>

                        <div className="p-5 bg-white rounded-2xl relative pb-20">
                            <FaQuoteLeft className="text-4xl text-gray-500 my-3" />
                            <p className="text-xl">{ReviewData?.data[1]?.review}</p>

                            <div className="absolute bottom-0 left-0 bg-[#E9E7E7] px-5 py-2 rounded-bl-2xl rounded-tr-2xl">
                                <div className="flex items-center gap-3">
                                    <img src="https://i.pinimg.com/75x75_RS/11/c2/72/11c27232c3821e35e72935fbb8f4720a.jpg" alt="" className="size-10 rounded-full" />

                                    <div className="">
                                        <p className="text-xl font-bold">{ReviewData?.data[1]?.user?.name}</p>
                                        <p className="text-sm">{ReviewData?.data[1]?.user?.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-5">
                        <Link to={'/review'} className="text-center font-mono text-[#7632e2] font-black text-xl">View More Review</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;