import Image from 'next/image'
import React from 'react'
import map from "../public/images/map.40972935.png"

function ReachUs() {
  return (
    <div className='w-full h-auto bg-[#46D3A9] px-[20%] sm:flex  pb-10 sm:pb-0'>
      <div className='w-full h-full '>
        <Image src={map} alt={"/"} />
      </div>
      <div className='w-full h-full pt-24 pl-10 '>

        <h2 className='text-2xl sm:text-5xl font-extrabold text-[#064E3B]'>
        Want to reach us at our office?
        </h2>
        <p className=' text-[#064E3B]  my-8'>
        We{"’"}d love to hear from you for partnerships, sponsorship discussions, recruitment engagements, compliments,
        and general business inquiries. Click on the link below to locate the Google map to our office.
        </p>
        <div className='w-full h-auto flex justify-end'>
            <button className='text-white py-3 px-14 sm:px-5 rounded-full font-bold bg-[#064E3B]'>Get Direction</button>
        </div>
      </div>
    </div>
  )
}

export default ReachUs