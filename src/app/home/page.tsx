import React, {FC} from "react";
import Link from "next/link";

const Page: FC = () => {
    return (<div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="text-2xl font-semibold mb-8">Choose Option</div>
      <div className="flex space-x-8">
        <Link href="/student" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:bg-gray-200">
          <div className="text-lg hover:bg-#e2e8f0">
            Student
          </div>
        </Link>
        <Link href="/teacher" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:bg-gray-200">
          <div className="text-lg hover:bg-#e2e8f0">Teacher</div>
        </Link>
      </div>
    </div>);
}

export default Page;