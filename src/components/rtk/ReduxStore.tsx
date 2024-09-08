import { configureStore } from "@reduxjs/toolkit";
import BaseQuery from "./BaseQuery";
import UserSlice from "./UserSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const UserPersisted = persistReducer(persistConfig, UserSlice.reducer);


const ReduxStore = configureStore({
    reducer: {
        [BaseQuery.reducerPath]: BaseQuery.reducer,
        'user': UserPersisted
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(BaseQuery.middleware),
});

export const persistor = persistStore(ReduxStore)
export default ReduxStore;
export type AppRoot = ReturnType<typeof ReduxStore.getState>;
export type Dispatch = typeof ReduxStore.dispatch;