'use client'

import { useEffect, useState } from "react";
import IndivQDisplay from "./indivQDisplay";


function AllQsDisplay({testContent, teach, getAnswers}){
    // console.log("content of the test in allQs display is: ")
    // console.log(testContent);
    const [stuAnswers, setAnswers] = useState([]);

    function updateAnswers(index, object){
        var currentAnswers = {...stuAnswers};
        currentAnswers[index] = object;
        setAnswers(currentAnswers);
    }

    useEffect(()=>{
        getAnswers(stuAnswers);
        console.log(stuAnswers);
    }, [stuAnswers]);

    return (<>
    {testContent && testContent.map(
        (testqs, index)=>(<IndivQDisplay key={index} indexQ={index} object={testqs} teach={teach} updateAnswers={updateAnswers}/>)
    )}
    </>)
}   

export default AllQsDisplay;