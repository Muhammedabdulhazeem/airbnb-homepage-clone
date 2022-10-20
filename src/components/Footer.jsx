import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 border border-t-gray-400 py-[15px] z-[200] bg-white'>
            <div className='flex w-[90%] mx-auto justify-between'>
                <div className='flex relative'>
                    <span>© 2022 Airbnb, Inc.</span>
                    <span className='mx-[13px] relative -top-1'>.</span>
                    <span>Privacy</span>
                    <span className='mx-[13px] relative -top-1'>.</span>
                    <span>Terms</span>
                    <span className='mx-[13px] relative -top-1'>.</span>
                    <span>Sitemap</span>
                    <span className='mx-[13px] relative -top-1'>.</span>
                    <span>Destination</span>
                </div>

                <div className='flex items-center relative'>
                    <div className='mr-[7px]'>
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
                    <span className=''>English <span>(US)</span></span>
                    <span className='ml-[25px]'>$</span>
                    <span className='ml-[7px]'>USD</span>
                    <span className='ml-[30px]'>Support & resuorces</span>
                    <div className='relative ml-[10px] bottom-[-3px]'>
                        <svg viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" role="presentation" 
                            focusable="false" 
                            style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible"}}>
                            <g fill="none"><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer