'use client'

import Test from "../../takeTest/test"
import { FC } from "react"
import { ParentProp } from "../../types"

const Parent : FC<ParentProp> = ({test}) => {
    return(<Test test={test} stud={false}/>);
}

export default Parent;