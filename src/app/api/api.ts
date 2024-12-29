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
        }),

        addNewTest: builder.mutation({
            query: (newTest) => ({
                url: "/createTest",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: newTest,
            })
        }),

        finishCurTest: builder.mutation({
            query: (index)=>({
                url: `/testOver/${index}`,
                method: "PATCH",
            })
        })
    })
})

export const {useGetAllTestsQuery, useGetSpecificTestQuery, useAddNewTestMutation, useFinishCurTestMutation} = api;