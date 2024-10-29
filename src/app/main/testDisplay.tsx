'use client'

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FC } from "react";
import Test from "../takeTest/test"

interface TestContentProps{
    qName: string;
    options: string[];
    correct_answers: number[];
    img?: string;
};

interface TestTypeProps{
    index: number;
    testName: string;
    testTime: number;
    notCompleted: boolean;
    testContent: TestContentProps[];
};

interface TestDisplayProps{
    key: number;
    test: TestTypeProps;
    onClick: (test: TestTypeProps) => void;
    teach: boolean;
}

const TestDisplay: FC<TestDisplayProps> = ({key, test, onClick, teach}) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const handleClick=(event: React.MouseEvent<HTMLButtonElement>)=>{
        // e.preventDefault();
        // setLoading(true);
        // console.log("clicked!")
        // onClick(test);  
        onClick(test);
        if(teach){
            setTimeout(()=>{
                router.push('/viewTest');
            }, 3000);
        }else{
            setTimeout(()=>{
                router.push('/takeTest');
            }, 3000);
        }
        // console.log(test);
    }
    // function handleClick(){
    //     console.log("clicked at display!");
    //     console.log(test);
    //     onClick(test);
    // }
    
    return(
    <div className="p-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={key}>
        <span>
            {/* <img className="rounded-t-lg" src={test.img} alt="" /> */}
        </span>
        <div className="p-13">
            <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{test.testName}</h5>
            </span>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Time:</span> {test.testTime} minutes</p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Total Questions:</span> {test.testContent.length} questions</p>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Marks:</span> {test.testMarks} marks</p>  */}
            <button onClick={handleClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {teach?"View Now":"Take Now"}
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    </div>);
}

export default TestDisplay;