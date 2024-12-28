'use client'

import { useState, useEffect, FC, SetStateAction } from "react";
import Option from "./options";
import FinishOpt from "./finishopt";
import { QuestionProps } from "../types";


interface OptionArrProps{
    text:string;
    correct: boolean;
}

const Question: FC<QuestionProps> = ({qNo, gatherVals}) => {
    const [imgURL, setURL] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [options, setOptions] = useState<OptionArrProps[]>([{text:"", correct:false}]);
    const [moreOpt, setMoreOpt] = useState<boolean>(true);

    useEffect(()=>{
        const correct_answers = options.map((opt, index)=>(opt.correct?index:null)).filter((ind)=>(ind!==null));
        const opt_text = options.map(opt=>opt.text);
        const testContent = {qName:question, correct_answers: correct_answers, options: opt_text, img:imgURL};
        // console.log("test content: ");
        // console.log(testContent);
        gatherVals(qNo, testContent);
    }, [question, options, imgURL]);

    let reader = new FileReader();

    reader.addEventListener("load", ()=>{
        console.log(reader.result);
        if (typeof reader.result === "string"){
            setURL(reader.result);
        }
    }, false);

    function upImg(event: React.ChangeEvent<HTMLInputElement>){
        const file = event.target.files[0];
        if(file){
            console.log(file)
            // let blob = new Blob(['http://localhost:3000/d64d6194-6f3c-4650-aed0-48ad3f8f888a'], {type: 'text/plain'})
            // console.log(blob);
            // const upURL = URL.createObjectURL(file);
            reader.readAsDataURL(file);
            // console.log(reader.result)
            // setURL(reader.result);
            // setURL(upURL);
        }
        console.log("image updated");
        // console.log(imgURL);
    }
    
    useEffect(()=>{
        console.log(imgURL);
        console.log(reader.result)
    }, [imgURL])

    function updateQ(event: React.ChangeEvent<HTMLInputElement>){
        setQuestion(event.target.value);
        // console.log(question);
        // console.log("question updated");
        // console.log(qNo);
    }

    function updateOption(index: number, text: string, correct: boolean){
        const currOptions = [...options];
        if(text!==null){
            currOptions[index].text = text;
        }
        if(correct !==null){
            currOptions[index].correct=correct;
        }
        setOptions(currOptions);
    }

    function addOption(){
        if(options.length<5){
            setOptions([...options, {text:"", correct:false}])
        }else{
            setMoreOpt(false);
        }
        // console.log("option added!");
    }

    
    return(
        <div>
            <div className="flex flex-col m-8 gap-8 justify-center items-center">
                <div className="flex flex-col gap-8 justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col m-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input onChange={upImg} className="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                        <img src={imgURL} alt="" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"></img>
                    </div>
                    <div className="flex flex-col p-4 leading-normal gap-8">
                        <div className="flex flex-row gap-4 border-gray-500">
                            <label htmlFor="default-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Question: </label>
                            <input type="text" onChange={updateQ} id="default-input" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                        {options.map((option, index)=>(<Option key={index} index={index} updateOption={updateOption}/>))}
                        {moreOpt&&<FinishOpt addOption={addOption}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;