import { CgUser } from 'react-icons/cg';
import { useAdminDashboardInfoQuery } from '../../components/rtk/Endpoint';
import LoadingModal from '../../components/ui/LoadingModal';

const Dashboard = () => {

    const { data, isLoading } = useAdminDashboardInfoQuery(undefined);
    console.log(data);
    // {
    //     "user_count": 9,
    //         "service_count": 2,
    //             "slot_count": 35,
    //                 "booking_count": 3,
    //                     "user": [
    //                         {
    //                             "_id": "66ddc59a99e59553cd6c76d8",
    //                             "name": "MD Siam",
    //                             "phone": "0163644633821",
    //                             "email": "admin1@gmail.com",
    //                             "password": "$2b$10$wricvxIVWMYn2rBld5.KueX1Kkn7SHmY4idbulo6oIqjlLPCr8MZC",
    //                             "address": "Supinpur, Satbaria, Sujannagar Pabna",
    //                             "role": "admin",
    //                             "createdAt": "2024-09-08T15:41:14.036Z",
    //                             "updatedAt": "2024-09-08T15:41:14.036Z",
    //                             "__v": 0
    //                         },
    //                         {
    //                             "_id": "66ddc55e99e59553cd6c76d5",
    //                             "name": "Md Siam Sheikh",
    //                             "phone": "01636447298",
    //                             "email": "admin@gmail.com",
    //                             "password": "$2b$10$souzcG.NV18q0Na4DB0xfOnLxduj7nvbOivDkjBTLKksf6Z0tkmY6",
    //                             "address": "Gupinpur, Satbaria, Sujannagar Pabna",
    //                             "role": "admin",
    //                             "createdAt": "2024-09-08T15:40:14.273Z",
    //                             "updatedAt": "2024-09-08T15:40:14.273Z",
    //                             "__v": 0
    //                         },
    //                         {
    //                             "_id": "66ddae0cccdecb9d6ab7aa66",
    //                             "name": "Siam",
    //                             "phone": "01287",
    //                             "email": "a1@gmail.com",
    //                             "password": "$2b$10$jYc1RDMTDKKiNZQ8oh2Mf.S0QQ0L0XrhM4wz7JKNJJvgmTwNcj23W",
    //                             "address": "ahkj",
    //                             "role": "user",
    //                             "createdAt": "2024-09-08T14:00:44.047Z",
    //                             "updatedAt": "2024-09-08T14:00:44.047Z",
    //                             "__v": 0
    //                         },
    //                         {
    //                             "_id": "66ddad90ccdecb9d6ab7aa63",
    //                             "name": "MD Siam",
    //                             "phone": "0163644633",
    //                             "email": "planqnetwork@gmail.com",
    //                             "password": "$2b$10$2A/CIoQeXkOhak8H4AGgtujW0NLYIwMC6ISSqwbQQrFNgEPdlP8LK",
    //                             "address": "Supinpur, Satbaria, Sujannagar Pabna",
    //                             "role": "user",
    //                             "createdAt": "2024-09-08T13:58:40.237Z",
    //                             "updatedAt": "2024-09-08T13:58:40.237Z",
    //                             "__v": 0
    //                         },
    //                         {
    //                             "_id": "66dd13eb072f60aded363168",
    //                             "name": "Siam Sheikh",
    //                             "phone": "01636446338",
    //                             "email": "siamyuo@gmail.com",
    //                             "password": "$2b$10$kACCQ5XoWANQ612BmKxha.CTovAjIUU.ET7JiS3keQDTr4a.2Ep22",
    //                             "address": "ami tomi",
    //                             "role": "user",
    //                             "createdAt": "2024-09-08T03:03:07.511Z",
    //                             "updatedAt": "2024-09-08T03:03:07.511Z",
    //                             "__v": 0
    //                         }
    //                     ],
    //                         "service": [
    //                             {
    //                                 "_id": "667364cd1715081e8bb70401",
    //                                 "name": "Car Wash",
    //                                 "description": "Professional car washing service by owner",
    //                                 "price": 500,
    //                                 "duration": 60,
    //                                 "isDeleted": false,
    //                                 "__v": 0
    //                             },
    //                             {
    //                                 "_id": "668857f3ba78cfb43ea3240a",
    //                                 "name": "Car Repari Service",
    //                                 "description": "Professional car washing service to return your money",
    //                                 "price": 100,
    //                                 "duration": 60,
    //                                 "isDeleted": true,
    //                                 "__v": 0
    //                             }
    //                         ],
    //                             "slot": [
    //                                 {
    //                                     "_id": "668857f7ba78cfb43ea32421",
    //                                     "service": "668857f3ba78cfb43ea3240a",
    //                                     "startTime": "13:00",
    //                                     "endTime": "14:00",
    //                                     "date": "2078-06-15",
    //                                     "isBooked": "available",
    //                                     "createdAt": "2024-07-05T20:30:47.686Z",
    //                                     "updatedAt": "2024-07-05T20:30:47.686Z",
    //                                     "__v": 0
    //                                 }
    //                                                             ],
    //                                 "booking": [
    //                                     {
    //                                         "_id": "6673683c11710a51b997cd31",
    //                                         "customerId": "66726f06bbd18614ab436163",
    //                                         "serviceId": "667364cd1715081e8bb70401",
    //                                         "slotId": "667365a11715081e8bb70411",
    //                                         "vehicleType": "car",
    //                                         "vehicleBrand": "Toyota",
    //                                         "vehicleModel": "Camry",
    //                                         "manufacturingYear": 2020,
    //                                         "registrationPlate": "ABC122a#2@",
    //                                         "__v": 0
    //                                     },
    //                                 ]
    // }
    return (
        <div className='p-5'>
            {/* <LoadingModal isLoading={isLoading} /> */}
            <div className="grid grid-cols-4 gap-8 w-full">
                <div className={`bg-white w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px] flex justify-between items-center`}>
                    <div className="">
                        <p className='font-sans font-bold'>Total User</p>
                        <div className="text-xl bg-purple-600 p-2 mt-2 rounded-xl text-white w-fit">
                            <CgUser className='text-3xl rounded-xl text-black' />
                        </div>
                    </div>

                    <p className='font-sans text-4xl font-bold'>{}</p>
                </div>

                <div className="bg-white h-20 w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]">
                    <p className='font-sans font-bold'>Total User</p>
                </div>

                <div className="bg-white h-20 w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]">
                    <p className='font-sans font-bold'>Total User</p>
                </div>

                <div className="bg-white h-20 w-full p-5 rounded-2xl bg-opacity-60 border-black border-opacity-40 border-[1px]">
                    <p className='font-sans font-bold'>Total User</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;