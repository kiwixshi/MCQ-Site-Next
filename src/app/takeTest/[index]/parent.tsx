'use client'

import { useRemoveTestContext } from "../../main/editTests";
import Test from "../test";
import { useState, FC, ReactNode } from "react";
import { TestProps } from "../../types";
import { useParams } from "next/navigation";
import { ParentProp } from "../../types";


const Parent: FC<ParentProp> = ({test}) => {
    const finishTest = useRemoveTestContext();
    // const [testP, setTest] = useState<TestProps>(() => {
    //     // if(typeof window !== "undefined"){
    //         const storedTestVal = window.localStorage.getItem('testVal');
    //         if (storedTestVal !== null) {
    //             try {
    //                 return JSON.parse(storedTestVal);
    //             } catch (error) {
    //                 console.error("Failed to parse stored testVal:", error);
    //             }
    //         }
    //     // }
    //     return {};
    // });
    return(<Test test={test} onComplete={finishTest} stud={true}/>);
}

export default Parent;