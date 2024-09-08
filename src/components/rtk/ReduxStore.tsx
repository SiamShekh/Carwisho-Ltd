import { configureStore } from "@reduxjs/toolkit";
import BaseQuery from "./BaseQuery";
import UserSlice from "./UserSlice";

const ReduxStore = configureStore({
    reducer: {
        [BaseQuery.reducerPath]: BaseQuery.reducer,
        'user': UserSlice.reducer
    },
    middleware: (getdefaultmiddlewars)=> getdefaultmiddlewars().concat(BaseQuery.middleware)
});

export default ReduxStore;
export type AppRoot = ReturnType<typeof ReduxStore.getState>;
export type Dispatch = typeof ReduxStore.dispatch;