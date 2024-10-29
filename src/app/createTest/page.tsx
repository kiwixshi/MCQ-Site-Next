'use client'
import MainPage from "./mainPage";
import EditTests from "../main/editTests";
import {FC} from "react"

const Page : FC = () => {
    return(
        <EditTests>
            <MainPage></MainPage>
        </EditTests>    
    );
}

export default Page;