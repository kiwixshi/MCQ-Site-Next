'use client'

import { useRemoveTestContext } from "../main/editTests";
import Test from "./test";
import { useState, FC } from "react";

interface TestContentProps{
    qName: string;
    options: string[];
    correct_answers: number[];
    img?: string;
}

interface TestTypeProps{
    index: number;
    testName: string;
    testTime: number;
    notCompleted: boolean;
    testContent: TestContentProps[];
};

interface ParentProps{

}

const Parent: FC<ParentProps> = () => {
    const finishTest = useRemoveTestContext();
    const [testP, setTest] = useState<TestTypeProps>(() => {
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
    return(<Test test={testP} onComplete={finishTest} stud={true}/>);
}

export default Parent;