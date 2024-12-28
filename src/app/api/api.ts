import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { TestProps } from "../types";

export const api = createApi({
    reducerPath: "mcqTestsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) =>({
        getAllTests: builder.query<TestProps[], void>({
            query: ()=>"/getTests",
        }),

        getSpecificTest: builder.query<TestProps, number>({
            query: (index)=>({url: `/fetchTest/${index}`})
        })
    })
})

export const {useGetAllTestsQuery, useGetSpecificTestQuery} = api;