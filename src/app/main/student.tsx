'use client'

import TestDisplay from "./testDisplay";
import { useSelectTestContext } from "./editTests";
import { useGetAllTestsQuery } from "../api/api";
import {FC} from 'react';
import Spinner from "../spinner";

const Student: FC = () => {
  const onTestClick=useSelectTestContext();

  const {data, isError, isLoading} = useGetAllTestsQuery();

  if (isError){
    return (
      <h1>something went wrong :/</h1>
    )
  }

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
        <h3 className="p-8">Student Display</h3>
      </nav>
      <h2 className="pt-8 pl-8 text-3xl">Welcome</h2>
      <h3 className="pt-8 pl-8 text-2xl">Your Tests</h3>
      <div className="p-8 flex md:flex-row sm:flex-col flex-wrap gap-6 max-h-screen">
        {data!=null?data.map(test => test.notCompleted&&(<TestDisplay key={test.index} test={test} onClick={onTestClick} teach={false}/>)):(<div></div>)}
      </div>
    </div>
  );
}

export default Student;
