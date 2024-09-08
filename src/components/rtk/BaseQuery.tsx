import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const BaseQuery = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    reducerPath: 'api',
    endpoints: () => ({})
})

export default BaseQuery;