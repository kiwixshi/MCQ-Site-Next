'use client'

import { useEffect, useState, FC } from "react";
import IndivQDisplay from "./indivQDisplay";
import { AllQsDisplayProps } from "../types";


const AllQsDisplay: FC<AllQsDisplayProps> = ({testContent, teach, getAnswers}) =>{
    // console.log("content of the test in allQs display is: ")
    // console.log(testContent);
    const [stuAnswers, setAnswers] = useState<boolean[][]>([]);

    function updateAnswers(index: number, object: boolean[]){
        const currentAnswers = [...stuAnswers];
        currentAnswers[index] = object;
        setAnswers(currentAnswers);
    }

    useEffect(()=>{
        getAnswers(stuAnswers);
        console.log(stuAnswers);
    }, [stuAnswers]);

    return (<>
    {testContent && testContent?.map(
        (testqs, index: number)=>(<IndivQDisplay key={index} indexQ={index} object={testqs} teach={teach} updateAnswers={updateAnswers}/>)
    )}
    </>)
}   

export default AllQsDisplay;