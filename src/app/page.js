'use client'

import React, {useState, useEffect} from "react";
// import Student from "./student/student";
// import Test from "./Student/Test";
// import Home from "./Home" 
// import {Routes, Route, useNavigate} from "react-router-dom";
// import tests from "./testdisparr"
// import Teacher from "./Teacher";
// import Create from "./Create"
import Link from "next/link";

function Page() {
  // const view = () =>{
  //   console.log(allTests);
  // }
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Student" element={<Student view={view} name="Shivani" onTestClick={handleTestClick} tests={allTests}/>}></Route>
        <Route path="/Teacher" element={<Teacher tests={allTests} onView={handleTestView}/>}></Route>
        <Route path="/TestScreen" element={<Test test={selectedTest} onComplete={removeTest} stud={true}/>} />
        <Route path="/ViewTest" element={<Test test={selectedTest} stud={false}/>}></Route>
        <Route path="/CreateTest" element={<Create addTest={addTest}/>}></Route>
      </Routes> */}
      <Link href="/home">home</Link>
    </div>
  );
}

export default Page;
// export {allTests};