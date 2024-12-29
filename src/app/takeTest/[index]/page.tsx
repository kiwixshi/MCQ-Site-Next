'use client'

import EditTests from "../../main/editTests";
import Parent from "./parent";
import {FC} from 'react';
import { useParams } from "next/navigation";
import { useGetSpecificTestQuery } from "../../api/api";

const Page: FC = () => {
    const params = useParams();
    const {index} = params;
    console.log("params "+index)
    const {data, isError, isLoading} = useGetSpecificTestQuery(Number(index));

    if (isError){
        return <h1>
            something went wrong :/
        </h1>
    }

    if (isLoading){
        return <h1>
            pls wait
        </h1>
    }
    console.log("this is the data");
    console.log(data);
    return(<>
        {/* <div><h1>hello {index}</h1></div> */}
        <EditTests>
            <Parent test={data}></Parent>
        </EditTests>
    </>)
}

export default Page;