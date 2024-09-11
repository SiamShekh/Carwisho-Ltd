import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppRoot } from "../components/rtk/ReduxStore";
import { useBookASlotMutation } from "../components/rtk/Endpoint";
import { clearSlice } from "../components/rtk/BookingSlice";
import LoadingModal from "../components/ui/LoadingModal";

const SuccessPage = () => {
    const dispatch = useDispatch();
    const BookingDataSlice = useSelector((state: AppRoot) => state.booking);
    const [triggerASlot, { data, isLoading }] = useBookASlotMutation();
    useEffect(() => {
        if (BookingDataSlice?.payment_url) {
            triggerASlot({
                ...BookingDataSlice
            });
        }
    }, []);

    if (data?.message === "Booking successful") {
        dispatch(clearSlice())
    }

    return (
        <div className="min-h-screen flex justify-center items-center flex-col gap-4">
            <LoadingModal isLoading={isLoading} />
            {
                !isLoading &&
                <>
                    <img src="https://cdn-icons-png.freepik.com/512/6459/6459980.png" alt="" className="size-28" />
                    <div className="">
                        <p className="font-bold text-3xl">Payment Successful</p>
                        <p>click 'Go Back' button to go dashboard</p>
                    </div>

                    <Link to={'/dashboard'} className="bg-lime-400 px-8 py-2 rounded-xl">Go Back</Link>
                </>}

        </div>
    );
};

export default SuccessPage;