import { configureStore } from "@reduxjs/toolkit";
import BaseQuery from "./BaseQuery";
import UserSlice from "./UserSlice";

const ReduxStore = configureStore({
    reducer: {
        'api': BaseQuery.reducer,
        'user': UserSlice.reducer
    },
    middleware: (getdefaultmiddlewars)=> getdefaultmiddlewars({serializableCheck: {}}).concat(BaseQuery.middleware)
});

export default ReduxStore;
export type AppRoot = ReturnType<typeof ReduxStore.getState>;
export type Dispatch = typeof ReduxStore.dispatch;