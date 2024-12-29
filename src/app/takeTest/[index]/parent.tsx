'use client'

import Test from "../test";
import { FC } from "react";
import { ParentProp } from "../../types";


const Parent: FC<ParentProp> = ({test}) => {
    return(<Test test={test} stud={true}/>);
}

export default Parent;