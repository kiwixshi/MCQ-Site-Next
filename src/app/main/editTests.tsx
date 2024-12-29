'use client'

import React, { useContext, createContext} from 'react';
import { TestProps } from '../types';
import { useRouter } from 'next/navigation';

type selectingTest = (obj: TestProps) => void;

const SelectTestContext = createContext<selectingTest>(null);

function useSelectTestContext(){
    return useContext(SelectTestContext);
}

function EditTests( {children} ){
   const router = useRouter();

  const handleTestClick = (test: TestProps)=>{
    router.push("/takeTest/"+test["index"]);
  }

  
  return(
    <>
        <SelectTestContext.Provider value={handleTestClick}>
            {children}
        </SelectTestContext.Provider>
    </>
  );
}

export default EditTests;
export { useSelectTestContext};