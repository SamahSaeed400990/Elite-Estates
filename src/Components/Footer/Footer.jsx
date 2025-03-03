import React from 'react'

export default function Footer() {
  return (
    <>
    <div className=' w-full    mt-20 bg-[#000000] text-white '>
        <div className='w-[1336px] mx-auto '>
    <div className='text-[#969696] flex gap-2 w-1/3  mb-10'>
    <i className="fa-solid fa-quote-left mt-16"></i>
    <p className='mt-16'>
    Our business is built off of close relationships and we are 
glad that we are able to share our positive real estate
experiences with our clients.
    </p>

    </div>
    
    <div className='grid grid-cols-12 justify-between'>
        <div className="col-span-4">
            <h2 className='font-semibold text-xl mb-6'>Contact Us</h2>
            <div className='flex gap-2 items-center mb-2'>
            <i className="fa-solid fa-location-dot"></i>
            <p>Cairo,Nasr city</p>
            </div>
            <div className='flex gap-2 items-center'>
               <i className="fa-solid fa-phone"></i>
               <p>022344444</p>
            </div>
        </div>
        <div className="col-span-4">
            <h2 className='font-semibold text-xl mb-6'>Quick Links</h2>
            <ul>
                <li className='mb-2' >About Us</li>
                <li className='mb-2'>Terms & Conditions</li>
                <li className='mb-2'>Support Center</li>
                <li className='mb-2'>Privacy Policy</li>
            </ul>
        </div>
        <div className="col-span-4">
            <h2 className='mb-10 font-semibold text-xl'>Newsletter</h2>
            <div className='relative'>
                         <input type="email" name="" id="" className='rounded-md px-2 py-1 w-3/4 bg-[#FFFFFF1A]' placeholder='Email Address' />
                         <i className="fa-solid fa-arrow-right bg-[#0055CD] absolute right-1/4 h-[32px] w-[35px] top-0 rounded-r-md pt-2 pl-2"></i>
            </div>
   
        </div>
        
    </div>

    <div className='flex  gap-10 mt-6  py-10 justify-center items-center'>
    <i className="fa-brands fa-facebook-f"></i>
    <i className="fa-brands fa-linkedin-in"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-twitter"></i>
    </div>
    </div>
    </div>
    </>
  )
}
