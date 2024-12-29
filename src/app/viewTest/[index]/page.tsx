'use client'

import { useParams } from "next/navigation";
import EditTests from "../../main/editTests";
import Parent from "./parent";
import { FC } from "react";
import { useGetSpecificTestQuery } from "../../api/api";

const Page : FC = () => {
    const params = useParams();
    const {index} = params;

    const {data, isError, isLoading}= useGetSpecificTestQuery(Number(index));

    if (isError){
        return <h1>something went wrong :/</h1>
    }

    if (isLoading){
        return <h1>pls wait :/</h1>
    }


    return(<>
        <EditTests>
            <Parent test={data}></Parent>
        </EditTests>
    </>)
}

export default Page;