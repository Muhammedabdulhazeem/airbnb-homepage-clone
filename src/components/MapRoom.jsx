import React from 'react'
import ImageSlider from './ImageSlider'

const MapRoom = ({room:{imageUrl, roomName, location, hostName, date, cost, rating}, index}) => {
  return (
    <div className='mb-[2rem]'>
        <div className='h-[150px] w-full mb-[25px]'>
            <img className='w-full h-full' src={imageUrl} alt="room" />
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-between items-center relative px-[10px]'>
                <span className='text-[18px] font-[600] leading-[18px]'>{location}</span>

                <div className='flex items-center relative right-[-5px]'>
                    <svg class="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
                          00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                          1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 
                          0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                          8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className='ml-[3px]'>{rating}</span>
                </div>
            </div>
            <span className='px-[10px] text-[17px] text-[#717171] font-[400] leading-[18px] my-[4px]'>Hosted by {hostName}</span>
            <span className='px-[10px] text-[17px] text-[#717171] font-[400] leading-[18px]'>{date}</span>
            <p className='px-[10px] mt-[10px]'><span className='text-[18px] font-[600] leading-[18px]'>${cost}</span>night</p>
        </div>

    </div>
  )
}

export default MapRoom