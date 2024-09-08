import BaseQuery from "./BaseQuery";

const Endpoint = BaseQuery.injectEndpoints({
    endpoints: (builder) => ({
        LoginUser: builder.mutation({
            query: (arg) => ({
                url: '/auth/login',
                body: arg,
                method: "POST"
            })
        }),
        RegisterUser: builder.mutation({
            query: (arg) => ({
                url: '/auth/signup',
                body: arg,
                method: "POST"
            }),
            invalidatesTags: ["me"]
        }),
        onAuthState: builder.query({
            query: () => ({
                url: '/auth/me',
                method: "GET"
            }),
            providesTags: ["me"]
        }),
        onAuthStateUser: builder.query({
            query: () => ({
                url: '/auth/my-info',
                method: "GET"
            }),
            providesTags: ["me"]
        }),
        ServiceList: builder.query({
            query: (arg) => ({
                url: '/services',
                method: "GET",
                params: arg
            }),
        }),
        SingleServiceData: builder.query({
            query: (arg) => ({
                url: `/services/${arg}`,
                method: "GET",
            }),
        }),
        SlotInformission: builder.query({
            query: (arg) => ({
                url: '/slots/availability',
                method: "GET",
                params: arg
            })
        }),
        SingleSlotInformission: builder.query({
            query: (arg) => ({
                url: '/slots',
                method: "GET",
                params: { id: arg }
            })
        }),
    })
})

export const { useOnAuthStateUserQuery,useSingleSlotInformissionQuery, useSlotInformissionQuery, useSingleServiceDataQuery, useLoginUserMutation, useRegisterUserMutation, useOnAuthStateQuery, useLazyOnAuthStateQuery, useServiceListQuery } = Endpoint;
export default Endpoint;