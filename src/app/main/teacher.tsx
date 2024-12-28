'use client'

import React from "react";
import TestDisplay from "./testDisplay";
import Link from "next/link";
import { useTestContext, useSelectTestContext } from "./editTests";
import { useGetAllTestsQuery } from "../api/api";
import {FC} from "react";

const Teacher: FC = () => {
    const tests=useTestContext();
    const onTestClick=useSelectTestContext();

    const {data, isError, isLoading} = useGetAllTestsQuery();

    if (isError){
        return(
            <h1>something went wrong :/</h1>
        )
    }

    if (isLoading){
        return (
            <h1>pls wait</h1>
        )
    }

    return (
        <div>
            <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
                <h3 className="p-8">Teacher Display</h3>
            </nav>
            <div className="w-screen flex justify-center">
                <Link href="/createTest" className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-1/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Add new quiz</span>
                </Link>
            </div>
            {/* <button onClick={debug}>debug</button> */}
            <h3 className="font-bold text-lg p-8 py-0">Existing Tests</h3>
            <div className="p-8 flex md:flex-row sm:flex-col flex-wrap gap-6 max-h-screen">
                {data!=null&&data.map(test => test.notCompleted&&(<TestDisplay key={test.index} test={test} onClick={onTestClick} teach={true}/>))}
            </div>
        </div>
    )};

export default Teacher;