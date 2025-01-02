'use client'

import {FC} from 'react' 

const Spinner : FC = () => {
    return (
        <>
            <div className='w-screen h-screen flex flex-wrap justify-center content-center fixed'>
                <span className='animate-spin'>
                    <div className='w-8 h-12 bg-white flex flex-wrap justify-center content-center'></div>
                    <div className='w-8 h-12 flex flex-wrap justify-center content-center'></div>
                </span>
            </div>
            <div className='w-screen h-screen flex flex-wrap justify-center content-center'>
                <div className='w-20 h-20 rounded-full bg-teal-300 flex flex-wrap justify-center content-center'>
                    <div className='w-16 h-16 rounded-full bg-white'></div>
                </div>
            </div>
        </>
    )
}

export default Spinner;