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
        onAuthStateAdmin: builder.query({
            query: () => ({
                url: '/auth/my-admin',
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
        ServiceListAdmin: builder.query({
            query: (arg) => ({
                url: '/admin/services',
                method: "GET",
                params: arg
            }),
            providesTags: ["admin_service_list"]
        }),
        AddServiceAdmin: builder.mutation({
            query: (arg) => ({
                url: '/services',
                method: "POST",
                body: arg
            }),
            invalidatesTags: ["admin_service_list"]
        }),
        UpdateServiceAdmin: builder.mutation({
            query: (arg) => ({
                url: `/services/${arg?.id}`,
                method: "PUT",
                body: arg?.body
            }),
            invalidatesTags: ["admin_service_list"]
        }),
        DeleteServiceAdmin: builder.mutation({
            query: (arg) => ({
                url: `/services/${arg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["admin_service_list"]
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
        UserListAdmin: builder.query({
            query: () => ({
                url: '/admin/user-list',
                method: "GET",
            }),
            providesTags: ["admin_user_list"]
        }),
        AppointAdmin: builder.mutation({
            query: (arg) => ({
                url: '/admin/appoint-admin',
                body: { id: arg },
                method: "POST"
            }),
            invalidatesTags: ["admin_user_list"]
        }),
        CreateSlots: builder.mutation({
            query: (arg) => ({
                url: '/services/slots',
                body: arg,
                method: "POST"
            }),
            invalidatesTags: ["admin_slots"]
        }),
    })
})

export const { useCreateSlotsMutation, useDeleteServiceAdminMutation, useUpdateServiceAdminMutation, useAddServiceAdminMutation, useAppointAdminMutation, useServiceListAdminQuery, useUserListAdminQuery, useOnAuthStateAdminQuery, useOnAuthStateUserQuery, useSingleSlotInformissionQuery, useSlotInformissionQuery, useSingleServiceDataQuery, useLoginUserMutation, useRegisterUserMutation, useOnAuthStateQuery, useLazyOnAuthStateQuery, useServiceListQuery } = Endpoint;
export default Endpoint;