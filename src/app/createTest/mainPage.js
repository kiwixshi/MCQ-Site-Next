'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import Question from './Question';
import { useAddTestContext } from '../main/editTests';
import { useRouter } from 'next/navigation';

function MainPage(){
    const [questions, editQuestions] = useState([]);
    const [finalArr, setArr] = useState([]);
    const [testName, setName] = useState("");
    const [testTime, setTime] = useState(0);
    const router = useRouter();

    const addTest = useAddTestContext();

    const gatherVals=(qNo, object)=>{
        console.log("test content in gatherVals: ");
        // console.log(object);
        // console.log(finalArr?"empty":"nopety");
        var currArr = []
        if (finalArr.length < qNo+1){
            // console.log(qNo, finalArr.length);
            currArr = finalArr.length?[...finalArr, object]:[object];
            // console.log("new question!");
        }else{
            // console.log(qNo, finalArr.length);
            currArr = [...finalArr]
            currArr[qNo] = object
            // console.log("question edited");
        }
        setArr(currArr);
        // console.log(currArr);
        // console.log(finalArr);
    };


    function addQuestion(){
        editQuestions([...questions, <Question key={questions.length} qNo = {questions.length} gatherVals = {gatherVals}/>])
        // console.log("question added!");
    }
    function finishQuiz(){
        // console.log("array on submission: ")
        // console.log(finalArr);
        const contentArr = [...finalArr];
        const sendObj = {testName: testName, testTime: testTime, notCompleted: true, testContent: contentArr};
        console.log(sendObj);
        addTest(sendObj);
        setTimeout(()=>{
            router.push('/teacher');
        }, 3000);
    }

    function handleTestName(event){
        setName(event.target.value);
        // console.log(testName);
    }

    
    function handleTestTime(event){
        setTime(event.target.value);
        // console.log(testTime);
    }

    return(
        <div>
        <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
            <h3 className="p-8">Teacher Display</h3>
        </nav>
        <div className="w-screen flex flex-col justify-center">
            <div className="flex flex-row justify-around m-8 mb-0 gap-4">
                <label htmlFor="default-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Test </label>
                <input type="text" id="default-input" onChange={handleTestName} className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>            
                <label htmlFor="default-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Test Time (in minutes) </label>
                <input type="number" id="default-input" onChange={handleTestTime} className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>            
            </div>
            <div className="flex flex-col">{questions}</div>
            <div className="flex flex-row justify-center">
                <button onClick={addQuestion} className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-1/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>New question</span>
                </button>
                <button onClick={finishQuiz} className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-1/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                    <span>Finish Quiz</span>
                </button>
                {/* <Link href='/teacher' className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-1/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                    <span>Go to dashboard</span>
                </Link> */}
            </div>
        </div>
    </div>
    );
}

export default MainPage;