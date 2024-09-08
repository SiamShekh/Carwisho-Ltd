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
        ServiceList: builder.query({
            query: (arg) => ({
                url: '/services',
                method: "GET",
                params: arg
            }),
        }),
    })
})

export const { useLoginUserMutation, useRegisterUserMutation, useOnAuthStateQuery, useLazyOnAuthStateQuery, useServiceListQuery } = Endpoint;
export default Endpoint;