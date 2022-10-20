import React from 'react'
import { RoomData } from '../data'
import RoomCard from './RoomCard'

const Rooms = () => {
  return (
    <div className='pt-[11rem]'>
        <div className='grid grid-cols-4 w-[90%] gap-[25px] mx-auto'>
            {RoomData.map((room, index) => (
                <RoomCard room={room} index={index}/>
            ))}
        </div>

    </div>
  )
}

export default Rooms