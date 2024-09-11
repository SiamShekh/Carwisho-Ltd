import { FaQuoteLeft } from "react-icons/fa";
import { useGetReviewQuery } from "../components/rtk/Endpoint";
import LoadingModal from "../components/ui/LoadingModal";

interface TReview {
    user: {
        name: string,
        email: string,
        password: string,
        phone: string,
        role: "admin" | "user",
        address: string,
    },
    review: string
}

const Review = () => {
    const { data: ReviewData, isFetching: ReviewFetchingData } = useGetReviewQuery(undefined);

    return (
        <div className="min-h-screen mt-28 mx-auto">
            <LoadingModal isLoading={ReviewFetchingData} />

            <section>
                <div className="py-10 max-w-[1200px] mx-auto p-5">
                    <p className="text-black text-opacity-60 text-center font-mono text-xl">Testimonial</p>
                    <p className="text-black text-center font-mono text-2xl mt-3">Transformative Client Experience</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        {
                            ReviewData?.data?.map((item: TReview, index: number) => <div key={index} className="p-5 bg-white rounded-2xl relative pb-20">
                                <FaQuoteLeft className="text-4xl text-gray-500 my-3" />
                                <p className="text-xl">{item?.review}</p>

                                <div className="absolute bottom-0 left-0 bg-[#E9E7E7] px-5 py-2 rounded-bl-2xl rounded-tr-2xl">
                                    <div className="flex items-center gap-3">
                                        <img src="https://i.pinimg.com/75x75_RS/11/c2/72/11c27232c3821e35e72935fbb8f4720a.jpg" alt="" className="size-10 rounded-full" />

                                        <div className="">
                                            <p className="text-xl font-bold">{item?.user?.name}</p>
                                            <p className="text-sm capitalize">{item?.user?.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;