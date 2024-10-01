'use client'

import { useRemoveTestContext } from "@/app/main/editTests"
import Test from "@/app/takeTest/test"
import { useState } from "react"

function Parent(){
    const finishTest = useRemoveTestContext();
    const [testP, setTest] = useState(() => {
        // if(typeof window !== "undefined"){
            const storedTestVal = window.localStorage.getItem('testVal');
            if (storedTestVal !== null) {
                try {
                    return JSON.parse(storedTestVal);
                } catch (error) {
                    console.error("Failed to parse stored testVal:", error);
                }
            }
        // }
        return {};
    });
    console.log(testP);
    return(<Test test={testP} onComplete={finishTest} stud={false}/>);
}

export default Parent;