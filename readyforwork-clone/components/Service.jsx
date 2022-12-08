import React from 'react'

function Service() {
  return (
    <div className='w-full  py-[10vh] bg-[#DFFFEC]'>
        <h2 className='text-4xl sm:text-6xl text-center font-extrabold text-[#064E3B]'>
            Customer Service
        </h2>
        <p className='text-center text-[#064E3B] sm:w-[60%] mx-auto my-10'>
        SFAN partners with corporates, international development agencies, governments, charitable foundations, and 
        individuals to unlock the potential of young people and create a global community of innovators. Our goal is to 
        assemble a critical mass of collaborators to drive distinctive, scalable innovation in youth employment, entrepreneurship, 
        and education. We believe that investment in young people is not 
        only the right thing to do, but it is also the smart thing to do, and the time is now!
        </p>
        <div className='w-full h-auto flex justify-center '>
            <button className='text-white py-1 sm:py-4 px-2 sm:px-20 rounded-full font-bold bg-[#00C997]'>Email Us</button>
        </div>
    </div>
  )
}

export default Service