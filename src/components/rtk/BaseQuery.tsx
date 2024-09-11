import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { AppRoot } from "./ReduxStore";


const BaseQuery = createApi({
    tagTypes: ["me", "admin_user_list", "admin_service_list", "admin_slots", "review", "booking"],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3000/api',
        baseUrl: 'https://carwashio.vercel.app/api',
        responseHandler: async (res) => {
            const result = await res.json();
            if (!result?.success) {
                if (result?.message === "Auth token is undefined or your are a unauthraized guy!") {
                    //
                }else if (result?.message === "User found!") {
                    //
                }else if (result?.message === "User is not found!") {
                    //
                }else if (result?.message === "User is not admin!") {
                    //
                }else if (result?.message === "You are not authorized!") {
                    //
                }else if (result?.message === "Auth token is undefined or you are an unauthorized guy!") {
                    //
                }else {
                    toast.error(result?.message);
                }
            }

            return result;
        },
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as AppRoot).user.token;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),

    endpoints: () => ({}),
})

export default BaseQuery;