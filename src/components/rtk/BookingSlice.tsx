import { createSlice } from "@reduxjs/toolkit";

const BookingSlice = createSlice({
    name: 'booking',
    initialState: {
        customerId: "",
        serviceId: "",
        slotId: "",
        vehicleType: "",
        vehicleBrand: "",
        vehicleModel: "",
        manufacturingYear: 0,
        registrationPlate: "",
        payment_url: "",
    },
    reducers: {
        setBooking: (state, payload) => {
            state.customerId = payload.payload.customerId;
            state.serviceId = payload.payload.serviceId;
            state.slotId = payload.payload.slotId;
            state.vehicleType = payload.payload.vehicleType;
            state.vehicleBrand = payload.payload.vehicleBrand;
            state.vehicleModel = payload.payload.vehicleModel;
            state.manufacturingYear = payload.payload.manufacturingYear;
            state.registrationPlate = payload.payload.registrationPlate;
            state.payment_url = payload.payload.payment_url;
        },
        clearSlice: (state) => {
            state.customerId = "";
            state.serviceId = "";
            state.slotId = "";
            state.vehicleType = "";
            state.vehicleBrand = "";
            state.vehicleModel = "";
            state.manufacturingYear = 0;
            state.registrationPlate = "";
            state.payment_url = "";
        }
    }
});

export const { setBooking, clearSlice } = BookingSlice.actions;
export default BookingSlice;