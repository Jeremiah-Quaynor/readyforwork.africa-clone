import React from 'react'

function Extra() {
  return (
    <div className='w-full sm:h-[50vh] sm:flex '>
        <div className='w-[100%] h-full sm:w-[50%] bg-[#46D3A9] py-20 px-10'>

            <h2 className='text-2xl sm:text-4xl font-extrabold text-[#064E3B]'>
                Get education that works
            </h2>
            <p className='text-[#064E3B] py-4'>
                We used to learn to do our work, but learning has become the work we do today. Set yourself up for success with in-demand digital skills that help you stand out in today’s highly competitive job. Fast-track your career with valuable insights and coach support from industry leaders. Our framework provides a cheaper, leaner, and faster way for upskilling.
            </p>
            <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold bg-[#02F780] text-white'>
                Launch your Career
            </button>
        </div>
        <div className='w-[100%] h-full sm:w-[50%] bg-[#DFFFEC] py-20 px-10'>

            <h2 className='text-2xl sm:text-4xl font-extrabold text-[#064E3B]'>
                Get better talent
            </h2>
            <p className='text-[#064E3B] py-4'>
            Resumes are becoming increasingly unreliable as an instrument for matching talents to jobs because many candidates lie on their resumes. Make data-driven, skills-based hiring decisions and get better results at less than 50% of the cost. Hire the best talent across the continent and beyond and create a reliable, top-rated talent pipeline at a fraction of the cost.</p>
            <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold bg-[#064E3B] text-white'>
                Hire great talents
            </button>
        </div>
    </div>
  )
}

export default Extra