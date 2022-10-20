import logo from '../assets/images/airbnb-logo.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 left-0 z-[200] bg-white border border-b-gray-400 py-[15px]'>
        <div className=' w-[90%] mx-auto flex items-center justify-between'>
            <div>
                <img src={logo} alt="logo" className='cursor-pointer'/>
            </div>

            <div className='flex items-center border hover-shadow cursor-pointer nav-shadow border-gray-400 rounded-[40px] py-[5px] pr-[5px]'>
                <span className='text-[14px] font-[600] leading-[18px] px-[15px]'>Anywhere</span>
                <span className='text-[14px] font-[600] leading-[18px] px-[15px] border-x-[1px] border-gray-400'>Any week</span>
                <div className='flex items-center'>
                    <span className='text-[14px] text-[#717171] font-[400] leading-[18px] px-[15px]'>Add guests</span>
                    <div className='w-[32px] h-[32px] bg-[#FF385C] rounded-[50%] flex justify-center items-center'>
                        <svg viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" role="presentation" 
                            focusable="false" 
                            style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'white', strokeWidth: '5.33333', overflow: 'visible'}}>
                            <g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 
                            0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                        </path></g></svg>
                    </div>
                </div>
            </div>

            <div className='flex items-center'>
                <span className='text-[14px] font-[600] leading-[18px] p-[10px] rounded-full hover:bg-gray-100 cursor-pointer'>Become a host</span>
                <div className='mx-[15px] p-[6px] cursor-pointer rounded-[50%] hover:bg-gray-100'>
                    <svg className="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" 
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 
                          0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 
                          3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 
                          10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 
                          1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 
                          6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd">
                    </path></svg>
                </div>
                
                <div className='flex items-center relative border profile cursor-pointer border-gray-400 rounded-[21px] p-[5px]'>
                    <div className='mr-[10px] ml-[2px]'>
                        <svg className="w-[25px] relative bottom-[-2px] h-[25px]" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 
                              0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                            clipRule="evenodd">
                            </path>
                        </svg>
                    </div>

                    <div className='relative '>
                        <svg viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" role="presentation" 
                            focusable="false" 
                            style={{display: 'block', height: '30px', width: '30px', fill: 'currentcolor'}}
                        >
                            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 
                              28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 
                              6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                        </path></svg>
                        <div className='h-[13px] w-[13px] rounded-[50%] bg-red-600 absolute top-[-3px] right-[-3px] border-2 border-white'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar