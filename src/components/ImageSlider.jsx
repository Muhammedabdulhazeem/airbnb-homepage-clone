import React, { useState } from 'react'

const ImageSlider = ({ imageUrl }) => {
  const [current, setCurrent] = useState(0)
  const [like, setLike] = useState(false)

  return (
    <section className='relative  flex justify-center items-center'>
      {imageUrl.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='rounded-[15px] w-[300px] h-[280px]' />
            )}
          </div>
        );
      })}
      <div className='flex space-x-[5px] items-center absolute bottom-0 left-[50%] translate-x-[-50%]'>
        <span onClick={() => setCurrent(0)} style={{backgroundColor: current === 0 ? 'white' : 'gray'}} className='h-[7px] w-[7px] cursor-pointer rounded-[50%] bg-blue-500'></span>
        <span onClick={() => setCurrent(1)} style={{backgroundColor: current === 1 ? 'white' : 'gray'}} className='h-[7px] w-[7px] cursor-pointer rounded-[50%] bg-blue-500'></span>
        <span onClick={() => setCurrent(2)} style={{backgroundColor: current === 2 ? 'white' : 'gray'}} className='h-[7px] w-[7px] cursor-pointer rounded-[50%] bg-blue-500'></span>
        <span onClick={() => setCurrent(3)} style={{backgroundColor: current === 3 ? 'white' : 'gray'}} className='h-[7px] w-[7px] cursor-pointer rounded-[50%] bg-blue-500'></span>
        <span onClick={() => setCurrent(4)} style={{backgroundColor: current === 4 ? 'white' : 'gray'}} className='h-[5px] w-[5px] rounded-[50%] cursor-pointer bg-blue-500'></span>
      </div>
      <div className='absolute right-2 cursor-pointer top-2'>
        <svg viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          role="presentation" 
          focusable="false" 
          onClick={() => setLike(!like)}
          style={{display: "block", fill: like ? "red" : "rgba(0, 0, 0, 0.5)", height: "24px", width: "24px", stroke: "white", strokeWidth: "2", overflow: "visible"}}>
          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 
          2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        </svg>
      </div>
    </section>
  )
}

export default ImageSlider