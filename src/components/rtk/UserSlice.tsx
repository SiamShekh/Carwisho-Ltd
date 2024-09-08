import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: ''
    },
    reducers: {

    }
});

export default UserSlice;