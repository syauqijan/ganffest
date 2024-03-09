import React from 'react'

const MainEventView = () => {
  return (
    <div className='flex p-8 mr-20 ml-20 mb-48 w-2/3 rounded-xl flex-col items-center justify-center bg-gradient-to-r from-primary/30 to-secondary/30'>
        <div>
            <h1 className='text-4xl font-bold '>Our Main Event</h1>
        </div>
        <div className='flex mt-8 p-8 w-full flex-row items-center justify-center'>
            <div className="relative mb-6 sm:mb-0 w-1/3 h-40">
                    <div className="flex items-center ">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div className='flex w-36 ml-5 font-bold text-2xl'>Day 1</div>
                        <div className="border-b flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900">Jumat, 8 Maret 2024</h3>
                        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Balai Kota Bandung</p>
                    </div>
                </div>
                <div className="relative mb-6 sm:mb-0 w-1/3 h-40">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div className='flex w-36 ml-5 font-bold text-2xl'>Day 2</div>

                        <div className="border-b flex bg-white w-full "></div>

                    </div>
                    <div className="mt-3 sm:pe-8 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">Sabtu, 9 Maret 2024</h3>
                        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time> */}
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">CO & CO Hub dan </p>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sinesofia Unpar</p>
                    </div>
                </div>
                <div className="relative mb-6 sm:mb-0 h-40">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div className='flex w-36 ml-5 font-bold text-2xl'>Day 3</div>

                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 ">Minggu, 10 Maret 2024</h3>
                        {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">IFI Bandung</time> */}
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">IFI Bandung</p>
                    </div>
                </div>
        </div>
            
    </div>




  )
}

export default MainEventView