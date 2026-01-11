import React from 'react'
import { ArrowRight } from 'lucide-react';
export default function () {
  
  
    return (
    
    <div className='mt-40 ml-10'>
        <div >
            <h1 className='font-bold text-6xl md:text-8xl mb-5 md:mb-10'>
                !MAKE YOUR MARK!
            </h1>
            <p className='text-1xl md:text-2xl mb-5 md:mb-10'>Stop thinking, start inking. Book your session <br /> below.</p>
            <div className='mb-5 md:mb-10'>
                <p>Schedule an appointment</p>
            </div>
            <div className='text-3xl md:text-4xl '>
                allstarink@gmail.com
            </div>
        </div>
        <div>
            <div className='md:flex justify-between pt-15 '>            
                <h1 className=' font-bold text-6xl md:text-9xl mb-10 '>
                    Limerick, <br />Irland
                </h1>
                <div className='md:mr-10'>
                    <div className='flex '>
                        <h1 className='text-6xl mb-2 '>
                            (Get Inked)
                        </h1>
                        <div className='my-auto ml-20'>
                            <ArrowRight/>      
                        </div>
                  </div>
                 <div className="border-t w-fit pt-10">
                    <div className="grid grid-cols-[auto_1fr_2fr] gap-x-16 gap-y-10 ">
                        <div className="flex flex-col gap-17 text-gray-600">
                            <p>01</p>
                            <p>02</p>
                            <p>03</p>
                        </div>
                        <div className="flex flex-col gap-17">
                            <p>Get in Touch</p>
                            <p>Position</p>
                            <p>Social</p>
                        </div>

                        <div className="flex flex-col gap-y-10 ">
                            <p>
                                Book Your Appointment <br />
                                allstarink@gmail.com
                            </p>
                            <p>
                                44 Wickham St · 44 Wickham St,<br /> Prior's-Land,
                            </p>
                            <p>
                                Instagram, Facebook <br />
                                Pinterest
                            </p>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
