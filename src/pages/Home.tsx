import Lottie from "lottie-react";
import car_anim from "../assets/raw/car_anim.json";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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
        </div>
    );
};

export default Home;