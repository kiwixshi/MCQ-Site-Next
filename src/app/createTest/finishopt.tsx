import React, {FC} from "react"

// interface FinishOptProps{
//     addOption: ()=>{};
// }

function FinishOpt({addOption}){
    return (<div className="flex flex-row gap-4 border-gray-500">
        <button onClick={addOption} className="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-full">
            <span>Add more options</span>
        </button>
    </div>)
}

export default FinishOpt;