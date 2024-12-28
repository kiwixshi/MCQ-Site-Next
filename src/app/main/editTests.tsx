'use client'

import React, {useState, useEffect, useContext, createContext, FC} from 'react';
import { TestDetailProps, TestProps } from '../types';
import { useRouter } from 'next/navigation';

type addingTest = (obj: TestDetailProps) => void;
type deletingTest = (obj: TestProps) => void;
type selectingTest = (obj: TestProps) => void;


const TestContext = createContext<TestProps[]>(null);
const AddTestContext = createContext<addingTest>(null);
const DeleteTestContext = createContext<deletingTest>(null);
const SelectTestContext = createContext<selectingTest>(null);
const ClickedTestContext = createContext<TestProps>(null);

function useTestContext(){
    return useContext(TestContext);
}

function useClickedTestContext(){
    return useContext(ClickedTestContext);
}

function useAddTestContext(){
    return useContext(AddTestContext);
}

function useRemoveTestContext(){
    return useContext(DeleteTestContext);
}

function useSelectTestContext(){
    return useContext(SelectTestContext);
}

function EditTests( {children} ){
    const [selectedTest, setSelectedTest] = useState<TestProps>();
    const [indTest, setInd] = useState(1);
    const [allTests, changeTests] = useState<TestProps[]>([]);
    const router = useRouter();
    
    useEffect(()=>{
        const storedTests = window.localStorage.getItem('allTs');
        const parsedTests = JSON.parse(storedTests);
        if(storedTests){
            try {
                if (Array.isArray(parsedTests)) {
                    changeTests(parsedTests);
                    setInd(parsedTests.length);
                    // console.log("set test value to ");
                    // console.log(parsedTests);
                }else{
                    console.log("no test value so we reset it to []");
                    changeTests([]);
                }
            } catch (error) {
                console.error("Failed to parse stored testVal:", error);
                changeTests([]);
            }
        }  
    }, []);

  const addTest = (arr: TestDetailProps) =>{
    // console.log('clicked at add!');
    const currentTests = allTests || [];
    const newTest = { index: indTest, ...arr };
    console.log(newTest);
    changeTests([...currentTests, newTest]);
  }

  useEffect(() => {
    if (allTests && allTests.length>0) {
        window.localStorage.setItem('allTs', JSON.stringify(allTests));
        console.log(allTests.length);
        setInd(indTest+1);
    }
  }, [allTests]);

  const removeTest = (test: TestProps) =>{
    console.log(test);
    const testIndex = allTests.findIndex((t)=>(t.index===test.index));
    console.log(testIndex);
    changeTests([...allTests.slice(0, testIndex), {...allTests[testIndex], notCompleted:false}, ...allTests.slice(testIndex+1)]);
    console.log(allTests);
  }

  const handleTestClick = (test: TestProps)=>{
    // setSelectedTest(test);
    // window.localStorage.setItem('testVal',  JSON.stringify(test));
    router.push("/takeTest/"+test["index"]);
  }

  useEffect(() => {
    console.log("Selected test updated to: ", selectedTest);
  }, [selectedTest]);
  
  return(
    <>
        <TestContext.Provider value={allTests}>
            <AddTestContext.Provider value={addTest}>
                <DeleteTestContext.Provider value={removeTest}>
                        <SelectTestContext.Provider value={handleTestClick}>
                            <ClickedTestContext.Provider value={selectedTest}>
                                {children}
                            </ClickedTestContext.Provider>
                        </SelectTestContext.Provider>
                </DeleteTestContext.Provider>
            </AddTestContext.Provider>
        </TestContext.Provider>
    </>
  );
}

export default EditTests;
export {useTestContext, useAddTestContext, useClickedTestContext, useRemoveTestContext, useSelectTestContext};