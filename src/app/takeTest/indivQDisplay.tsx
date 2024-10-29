'use client'

import React, {useEffect, useState, FC} from "react";

interface IndivQDisplayProps{
    indexQ: number;
    object: {
        qName: string;
        options: string[];
        correct_answers: number[];
        img?: string;
    };
    teach: boolean;
    updateAnswers: (index: number, checked: boolean[]) => void;
}


const IndivQDisplay: FC<IndivQDisplayProps> = ({indexQ, object, teach, updateAnswers}) => {
    const [correctOpts, updateOption] = useState<boolean[]>(new Array(object.options.length).fill(false));

    function getCorrect(event: React.ChangeEvent<HTMLInputElement>){
        // console.log(event.target.id);
        // console.log(indexQ)
        updateAnswer(parseInt(event.target.id), event.target.checked);
    }

    function updateAnswer(index: number, correct: boolean){
        const currentAnswers = [...correctOpts];
        currentAnswers[index] = correct;
        updateOption(currentAnswers);
    }

    useEffect(()=>{
        console.log(correctOpts);
        updateAnswers(indexQ, correctOpts); 
    }, [correctOpts, indexQ])
    
    function createOption(index: number, options: string){
        return (
        <div key={index} className="flex items-center w-full ps-4 gap-3 border border-gray-200 rounded dark:border-gray-700">
            <input id={index.toString()} onChange={getCorrect} type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="bordered-checkbox-1" className="w-full p-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{options}</label>
        </div>)
    }
    
    
    function viewOption(index: number, options: string){
        return (
        <div key={index} className="flex items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
            <div className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{options}</div>
        </div>)
    }

    // console.log("in indivQDisplay:")
    // console.log(object);
    return(
        <div className="flex flex-col gap-2 py-5 min-w-20 justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h6 className="mx-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{object.qName}</h6>  
            <div className="flex flex-row my-2 p-5">    
                {object.img?<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={object.img} alt=""></img>:<div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"></div>}
                <div className="flex flex-col justify-between p-5 gap-4 leading-normal">
                    {teach?(object.options.map((option: string, index: number)=>viewOption(index, option))):(object.options.map((option: string, index: number)=>createOption(index, option)))}
                </div>
            </div>
        </div>
    );
}

export default IndivQDisplay;