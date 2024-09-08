import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: ''
    },
    reducers: {
        setUser: (state, payload) => {
            state.email = payload.payload.email;
            state.token = payload.payload.token;
        },
        logoutUser: (state) => {
            state.email = "";
            state.token = "";
        }
    }
});

export const { setUser, logoutUser } = UserSlice.actions;
export default UserSlice;