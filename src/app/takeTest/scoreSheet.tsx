'use client'

import { useRouter } from "next/navigation";
import {FC} from 'react';
import { TestProps, ScoreProps } from "../types";
import { useFinishCurTestMutation } from "../api/api";


const Score: FC<ScoreProps> = ({test, testAnswers}) => {
    const router = useRouter();
    const [finTest, {data, isError, isLoading, isSuccess}] = useFinishCurTestMutation();

    if(isError){
        return <h1>something went wrong :/</h1>
    }

    
    if(isLoading){
        return <h1>please wait</h1>
    }

    var check={};
    var stud={};
    Object.keys(testAnswers).forEach((key)=>{
        check[key]=test.testContent[key]["correct_answers"];
        stud[key]=testAnswers[key];
    });
    
    var stuMarks = 0;
    var totalMarks = 0
    Object.keys(stud).forEach((key)=>{
        for(var i=0; i<check[key].length; i++){
            if(stud[key][check[key][i]]){
                stuMarks += 1;
            }
        }
        totalMarks += check[key].length;
    });
    
    const finishTest = async ()=>{
        try{
            await finTest(test["index"]);
        } catch(error){
            console.log("this is the error: "+error);
        }
    }


    if (isSuccess){
        router.push("/student");
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Your Score is: </h3>
                    <div className="mt-2">
                        <h3 className="text-sm text-gray-500">{stuMarks}/{totalMarks}</h3>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" onClick={finishTest} className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto">Go back to home screen</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default Score;