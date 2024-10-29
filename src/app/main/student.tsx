'use client'

import TestDisplay from "./testDisplay";
import { useSelectTestContext, useTestContext } from "./editTests";
import {FC} from 'react';


const Student: FC = () => {
  const tests=useTestContext();
  const onTestClick=useSelectTestContext();
  return (
    <div>
      <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
        <h3 className="p-8">Student Display</h3>
      </nav>
      <h2 className="pt-8 pl-8 text-3xl">Welcome</h2>
      <h3 className="pt-8 pl-8 text-2xl">Your Tests</h3>
      <div className="p-8 flex md:flex-row sm:flex-col flex-wrap gap-6 max-h-screen">
        {tests!=null?tests.map(test => test.notCompleted&&(<TestDisplay key={test.index} test={test} onClick={onTestClick} teach={false}/>)):(<div></div>)}
      </div>
    </div>
  );
}

export default Student;
