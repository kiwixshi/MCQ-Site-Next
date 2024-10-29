import EditTests from "../main/editTests";
import Parent from "./parent";
import { FC } from "react";

const Page : FC = () => {
    return(<>
        <EditTests>
            <Parent></Parent>
        </EditTests>
    </>)
}

export default Page;