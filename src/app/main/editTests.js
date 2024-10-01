'use client'

import React, {useState, useEffect, useContext} from 'react';

const TestContext = React.createContext();
const AddTestContext = React.createContext();
const DeleteTestContext = React.createContext();
const SelectTestContext = React.createContext();
const ClickedTestContext = React.createContext();

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
    const [selectedTest, setSelectedTest] = useState([]);
    const [allTests, changeTests] = useState([]);
    
    useEffect(()=>{
        const storedTests = window.localStorage.getItem('allTs');
        const parsedTests = JSON.parse(storedTests);
        if(storedTests){
            try {
                if (Array.isArray(parsedTests)) {
                    changeTests(parsedTests);
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

  const addTest = (arr) =>{
    // console.log('clicked at add!');
    const currentTests = allTests || [];
    const newTest = {index: currentTests.length, ...arr};  
    changeTests([...currentTests, newTest])
    // console.log(allTests);
  }

  useEffect(() => {
    if (allTests && allTests.length>0) {
        window.localStorage.setItem('allTs', JSON.stringify(allTests));
        // console.log("i am the problem >((")
        console.log(allTests);
    }
  }, [allTests]);

  const removeTest = (test) =>{
    console.log(test);
    const testIndex = allTests.findIndex((t)=>(t.index===test.index));
    console.log(testIndex);
    changeTests([...allTests.slice(0, testIndex), {...allTests[testIndex], notCompleted:false}, ...allTests.slice(testIndex+1)]);
    console.log(allTests);
  }

  const handleTestClick = (test)=>{
    setSelectedTest(test);
    window.localStorage.setItem('testVal',  JSON.stringify(test));
  }

  useEffect(() => {
    console.log("Selected test updated to: ", selectedTest);
  }, [selectedTest]);
  
  return(
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
  )
}

export default EditTests;
export {useTestContext, useAddTestContext, useClickedTestContext, useRemoveTestContext, useSelectTestContext};