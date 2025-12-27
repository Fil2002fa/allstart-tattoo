import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import {faqData} from "../faq"

export default function Faq() {
 
 const [feqOpen, setFeqOpen] = useState(false)
   
 function handleOpen(){
    setFeqOpen(prev => !prev)
 }
 
 
 
    return (
    <div >
      <h1 className='flex justify-center text-[clamp(40px,10vw,70px)]  '>
        FAQS****
      </h1>
       {faqData.map((f) => (
            <div className='border w-10/11 mx-auto '>
               <div className='py-2 px-2 md:px-6 flex justify-between text-[clamp(30px,4vw,50px)]'>
                 <p>{f.question}</p>
            {feqOpen ? (
                    <>
                    <button 
                        className='cursor-pointer text-[clamp(30px,5vw,60px)] mr-2' 
                        onClick={handleOpen}
                        
                        >
                        -
                    </button>
                    </>
                        ) : (
                    <>
                    <button 
                        className='cursor-pointer text-[clamp(40px,5vw,70px)]'
                        onClick={handleOpen}>
                        +
                    </button>
                    </> ) 
              }   
                </div>
                {feqOpen && (
                        <>
                        <div className='px-2 py-2'>
                            {f.answer}
                        </div>
                    </>
                )}
            
            </div>
        ))}
     
    </div>
  )
}
