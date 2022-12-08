import React from 'react'

function Enquiries() {
  return (
    <div className='w-full  py-[10vh] bg-[#DFFFEC]'>
        <h2 className='text-4xl sm:text-6xl text-center font-extrabold text-[#064E3B]'>
            Specific Enquires
        </h2>
        <div className='w-[60%] h-auto grid grid-flow-row sm:grid-flow-col mx-auto pt-6 gap-5'>
            <div className='w-full h-full grid grid-flow-row gap-5 '>
                <div className='w-full sm:h-[30vh] border-t-2 border-[#064E3B]'>
                    <h2 className='text-4xl sm:text-6xl text-center font-extrabold pt-4 text-[#064E3B]'>
                        01
                    </h2>
                    <h3 className='text-xl sm:text-2xl font-bold pt-4 text-[#064E3B]'>
                        Join Our Cohort
                    </h3>
                    <p className='w-contain'>
                    If you{"'"}re a high-potential young leader looking to level up and fast-track your 
                    career journey, visit our education page or call <a href="#" className='text-blue-700 underline'>+233 (030) 280 2935.</a>
                    </p>
                    <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold border-2 border-[#00C997] text-[#00C997]'>
                        Visit Education Page
                    </button>
                </div>
                <div className='w-full sm:h-[30vh] border-t-2 border-[#064E3B]'>
                    <h2 className='text-4xl sm:text-6xl text-center font-extrabold pt-4 text-[#064E3B]'>
                        02
                    </h2>
                    <h3 className='text-xl sm:text-2xl font-bold pt-4 text-[#064E3B]'>
                        Hire Bright Talents
                    </h3>
                    <p className='w-contain'>
                    Build a team that{"’"}s more agile, more self-sufficient, and reduce onboarding time by 
                    up to 50% while retaining employees with more than 90% efficiency.

                    </p>
                    <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold border-2 border-[#00C997] text-[#00C997]'>
                        Start Here
                    </button>
                </div>
            </div>
            <div className='w-full  sm:h-[30vh] grid grid-flow-row gap-5'>
            <div className='w-full sm:h-[30vh] border-t-2 border-[#064E3B]'>
                    <h2 className='text-4xl sm:text-6xl text-center font-extrabold pt-4 text-[#064E3B]'>
                        03
                    </h2>
                    <h3 className='text-xl sm:text-2xl font-bold pt-4 text-[#064E3B]'>
                        Partner With Us
                    </h3>
                    <p className='w-contain'>
                    We work with industry-leading experts and brands to develop an experiential education 
                    that unlocks the potential of Africa{"’"}s young geniuses.
                    </p>
                    <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold border-2 border-[#00C997] text-[#00C997]'>
                        Contact Us
                    </button>
            </div>
            <div className='w-full sm:h-[30vh] border-t-2 border-[#064E3B]'>
                    <h2 className='text-4xl sm:text-6xl text-center font-extrabold pt-4 text-[#064E3B]'>
                        04
                    </h2>
                    <h3 className='text-xl sm:text-2xl font-bold pt-4 text-[#064E3B]'>
                        Make A Donation
                    </h3>
                    <p className='w-contain'>
                    Your giving can help young African geniuses to launch fulfilling careers in 
                    high-growth companies. Join us to transform the lives of these young people.
                    </p>
                    <button className='py-4 px-14 sm:px-8 my-4 rounded-full font-bold border-2 border-[#00C997] text-[#00C997]'>
                        Donation
                    </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Enquiries