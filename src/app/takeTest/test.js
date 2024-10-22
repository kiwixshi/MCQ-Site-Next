'use client'

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown"
import AllQsDisplay from "./allQsDisplay";
import Score from "./scoreSheet";


function Test({test, onComplete, stud}){
    // console.log("in test component: ")
    // console.log(test);
    
    //initialize state from local storage value
    const [testP, setTest] = useState(() => {
        // if(typeof window != undefined){
            const storedTestVal = window.localStorage.getItem('testVal');
            if (storedTestVal != null) {
                try {
                    return JSON.parse(storedTestVal);
                } catch (error) {
                    console.error("Failed to parse stored testVal:", error);
                }
            }
        // }
        return test || {};
    });

    //if change update testVal
    useEffect(() => {
        if (testP) {
            window.localStorage.setItem('testVal', JSON.stringify(testP));
        }
    }, [testP]);

    // on completing the test
    const [studAns, setStud] = useState([]);  
    const [startTime] = useState(Date.now());

    function getAns(object){
        setStud(object);
        // console.log(studAns);
    }

    useEffect(()=>{
        console.log(studAns);
    }, [studAns])

    //when timer ends
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <Score test={testP} onComplete={onComplete} testAnswers={studAns}/>
            // <></>
          );
        }else{
            return (<h1>{hours}:{minutes}:{seconds}</h1>);
        }
    };
    // console.log("in take test display: ");
    // console.log(testP.testContent);

    //acutal html
    return (
        <div className="w-screen">
            <nav className="flex flex-row justify-between w-screen gap-8 bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
                <h3 className="p-8 text-2xl">{testP.testName}</h3>
                <div className="p-8">
                    {stud&&(<Countdown date={startTime+testP.testTime*60000} renderer={renderer}/>)}
                    {/* {<Countdown date={Date.now()+testP.testTime*60000} renderer={renderer}/>} */}
                </div>
            </nav>
            <div className="flex flex-col m-8 gap-8 justify-center items-center">
                {<AllQsDisplay testContent = {testP.testContent} teach = {!(stud)} getAnswers={getAns}/>}
            </div>
        </div>
    );
};

export default Test;
