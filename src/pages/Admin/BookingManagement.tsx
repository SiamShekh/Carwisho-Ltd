import React from 'react';
import LoadingModal from '../../components/ui/LoadingModal';
import { useGetAllBookingQuery } from '../../components/rtk/Endpoint';

interface TBooking {
    customerId: {
        name: string,
        email: string,
        password: string,
        phone: string,
        role: "admin" | "user",
        address: string,
    },
    serviceId: {
        name: string,
        description: string,
        price: number,
        duration: number,
        isDeleted: boolean,
    },
    slotId: string,
    vehicleType: string,
    vehicleBrand: string,
    vehicleModel: string,
    manufacturingYear: number,
    registrationPlate: string,
}
const BookingManagement = () => {
    const { data, isFetching } = useGetAllBookingQuery(undefined);
    return (
        <div className="max-w-[1200px] mx-auto bg-white m-5 rounded-xl">
            <LoadingModal isLoading={isFetching} />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Service Duration</th>
                            <th>Vehicle Brand</th>
                            <th>Vehicle Model</th>
                            <th>Manufacturing Year</th>
                            <th>Registration Plate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((item: TBooking, index: number) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item?.customerId?.name}</td>
                                <td>{item?.customerId?.email}</td>
                                <td>{item?.serviceId?.name}</td>
                                <td>{item?.serviceId?.price} TK</td>
                                <td>{item?.serviceId?.duration} Mins</td>
                                <td>{item?.vehicleBrand}</td>
                                <td>{item?.vehicleModel}</td>
                                <td>{item?.manufacturingYear}</td>
                                <td>{item?.registrationPlate}</td>
                                
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingManagement;