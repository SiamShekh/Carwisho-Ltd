import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { AppRoot } from "./ReduxStore";


const BaseQuery = createApi({
    tagTypes: ["me", "admin_user_list", "admin_service_list", "admin_slots"],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        responseHandler: async (res) => {
            const result = await res.json();
            if (!result?.success) {
                if (result?.message[0]?.message) {
                    toast.error(result?.message[0]?.message)
                } else if (result?.message) {
                    toast.error(result?.message)
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