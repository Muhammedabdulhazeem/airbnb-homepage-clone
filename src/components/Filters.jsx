import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FilterData } from '../data'

const Filters = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29,30]
    const [trans, setTrans] = useState(0)
    const [track, setTrack] = useState('')

    console.log(trans)

    const handlePrev = () => {
        if(trans !== 0) {
            setTrans(prevTrans => prevTrans - 1100) 
        } else {
            setTrans(0)
        }
    }
    const handleNext = () => {
        if(trans !== 5500) {
            setTrans(prevTrans => prevTrans + 1100) 
        } else {
            setTrans(5700)
        }
    }



    return (
        <div className='w-screen flex justify-center fixed top-[78px] py-[10px] right-0 left-0 z-[200] bg-white'>
            <div className='flex items-center w-[90%]mx-auto'>
                <div className='flex items-center relative'>

                    {trans !== 0 && (<div className='absolute top-0 bottom-0 left-0 w-[43px] opacity-[0.7] bg-white z-[10]'></div>)}
                    {trans !== 5500 && (<div className='absolute top-0 bottom-0 right-0 w-[43px] opacity-[0.7] bg-white z-[10]'></div>)}

                    {trans !== 0 && (<div className='absolute left-0 top-0 bottom-0 h-[74px] flex items-center z-[300]'>
                        <div onClick={handlePrev} className='h-[30px] w-[30px] border-2 border-gray-400 relative top-[-7px] cursor-pointer z-[400] rounded-[50%] flex items-center justify-center bg-white'>
                            <svg viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" }}><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </div>
                    </div>)}

                    <div className=' flex max-w-[1220px] relative left-[-1.5rem] ml-[2.5rem] overflow-hidden'>
                        <div style={{ transform: `translateX(-${trans}px)`}} className={`flex space-x-[40px] pr-[7px] transition-all duration-[2000]`}>
                            {FilterData.map((filter, index) => (
                                <div key={index} onClick={() => setTrack(index)} className='cursor-pointer shrink-0 flex flex-col items-center'>
                                    <img className='h-[24px] w-[24px]' src={filter.src} alt="logo" />
                                    <span 
                                        className={index === track? ` text-[14px] active-link leading-[16px] font-[600] mt-[7px] pb-[8px]` : `text-[#717171] text-[14px] leading-[16px] font-[600] mt-[7px] pb-[8px]`}
                                    >{filter.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {trans !== 5500 && (<div className='absolute right-0 top-0 bottom-0 h-[74px] z-[300] flex items-center'>
                        <div onClick={handleNext} className='h-[30px] w-[30px] relative left-[-10px] top-[-7px] border-2 border-gray-400 cursor-pointer rounded-[50%] flex items-center justify-center bg-white'>
                            <svg viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" }}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                        </div>
                    </div>)}
                </div>

                <div className='flex items-center h-[40px] w-[95px] border relative left-[-3px] border-gray-400 rounded-[12px] ml-[10px] px-[10px] py-[7px]'>
                    <div className='space-x-[10px] flex items-center'>
                        <div>
                            <svg viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: "block", height: "14px", width: "14px", fill: "currentColor" }}
                                aria-hidden="true" role="presentation" focusable="false">
                                <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 
                                1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 
                                2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                        <span>Filter</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
