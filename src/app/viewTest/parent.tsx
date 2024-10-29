'use client'

import { useRemoveTestContext } from "../main/editTests"
import Test from "../takeTest/test"
import { useState, FC } from "react"

const Parent : FC = () => {
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