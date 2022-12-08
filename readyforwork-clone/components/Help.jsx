import Image from 'next/image'
import React from 'react'
import Help1 from '../public/images/help1.png'
import Help2 from '../public/images/help2.png'
import Help3 from '../public/images/help3.png'
import Help4 from '../public/images/help4.png'


function Help() {
  return (
    <div className='h-auto w-full bg-[url("/images/HS.jpg")] bg-cover px-[15%] sm:flex gap-4 sm:py-24'>
        <div className='sm:w-[40%] h-full bg-white '>
            <h2 className='text-2xl sm:text-5xl text-center mt-8 font-extrabold text-[#064E3B]'>
                Help & Support
            </h2>
            <div className='grid grid-flow-row gap-4 py-10'>
                <div className='w-[90%] mx-auto  border-2 border-[#064E3B] rounded-xl grid grid-flow-col'>
                    <Image src={Help1} alt={"/"}  className="w-[120px] h-[120px] py-2 my-auto ml-2"/>
                    <h3 className='text-xl sm:text-2xl font-extrabold pt-4 text-[#064E3B]'>
                        Schedule a call back
                    </h3>
                </div>
                <div className='w-[90%] mx-auto  border-2 border-[#064E3B] rounded-xl grid grid-flow-col'>
                    <Image src={Help2} alt={"/"}  className="w-[120px] h-[120px] py-2 my-auto ml-2"/>
                    <h3 className='text-xl sm:text-2xl font-extrabold pt-4 text-[#064E3B]'>
                        Start a live chat
                    </h3>
                </div>
                <div className='w-[90%] mx-auto  border-2 border-[#064E3B] rounded-xl grid grid-flow-col'>
                    <Image src={Help3} alt={"/"}  className="w-[120px] h-[120px] py-2 my-auto ml-2"/>
                    <h3 className='text-xl sm:text-2xl font-extrabold pt-4 text-[#064E3B]'>
                        Subscribe to Newsletter
                    </h3>
                </div>
                <div className='w-[90%] mx-auto  border-2 border-[#064E3B] rounded-xl grid grid-flow-col'>
                    <Image src={Help4} alt={"/"}  className="w-[120px] h-[120px] py-2 my-auto ml-2"/>
                    <h3 className='text-xl sm:text-2xl font-extrabold pt-4 text-[#064E3B]'>
                        Policies & Service Terms
                    </h3>
                </div>
            </div>
        </div>
        <div className='sm:w-[60%]  bg-[#A7F3D0] h-[70vh] overflow-y-scroll mt-5 sm:mt-0 px-6 py-6 sm:px-14 '>
            <h3 className='text-xl sm:text-2xl font-extrabold pt-4 text-[#064E3B]'>
                Frequently Asked Questions 
            </h3>
            <div className='grid grid-flow-row gap-4 py-10'>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>What is the application Process Like?</h2>
                    <p className='p-4'>
                        First, you must choose your track and apply here on the ReadyforWork website. You are advised to set a block of time 
                        for the assessment, which takes about 60 minutes. We will invite you for an onboarding interview if you pass the 
                        summative assessment. 
                        If you live in Ghana, that'll be a face-to-face 
                        interview. If you live outside of Ghana, you can join via Zoom. After the interview, you will receive our final 
                        selection decision.                    
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>If I'm selected, what should I expect?</h2>
                    <p className='p-4'>
                    Being selected to join ReadyforWork means you will be solving real business challenges. The program is intensive, so you need to plan to commit at least 15 hours weekly to your coursework. You will also need a laptop and stable internet. However, you can always come to our campus and learn from the digital classroom.
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>If I'm not selected, can I reapply in the future?</h2>
                    <p className='p-4'>
                    Yes, you can definitely reapply. We review applications for candidates' suitability for our program, so we often accept             
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>How long does the ReadyforWork Career Accelerator last?</h2>
                    <p className='p-4'>
                    Cumulatively, the RFWCA program lasts for six weeks. After the six weeks of intensive career coaching bootcamp, we open up the platform for our employer partners to connect with leaders that meet their criteria for jobs, internships, contract gigs, etc.
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>Will I get a job after participating in the ReadyforWork Career Accelerator?</h2>
                    <p className='p-4'>
                    We partner with corporates and high-growth startups to curate the RFW accelerator. After the six-week intensive bootcamp, our industry partners provide RFW leaders with paid internship,job or apprentice opportunities. While we provide these opportunities to all ReadyforWork leaders, we can not guarantee who gets a slot, as the program is competitive and merit-based.
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>Will I get a job after participating in the ReadyforWork Career Accelerator?</h2>
                    <p className='p-4'>
                    We partner with corporates and high-growth startups to curate the RFW accelerator. After the six-week intensive bootcamp, our industry partners provide RFW leaders with paid internship,job or apprentice opportunities. While we provide these opportunities to all ReadyforWork leaders, we can not guarantee who gets a slot, as the program is competitive and merit-based.
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>How much does the ReadyforWork Career Accelerator program cost?</h2>
                    <p className='p-4'>
                    The total cost of participating in the RFWCA is ¢2,500. This fee is payable upon securing a job placement. Even at that, we also have payment plans to ensure that reimbursement is not a burden on your earning. If a candidate does not secure a job interview within six months of graduating from RFW, then it’s free for life.
                    </p>
                </div>
                <div className='bg-white'>
                    <h2 className='font-bold p-4'>Who can apply to participate in the ReadyforWork Career Accelerator?</h2>
                    <p className='p-4'>
                    The program is open to high potential University graduates, entry-level job seekers, early-stage career professionals, and folks looking to either change jobs or re-enter the workforce. If you are still in school and wish to join ReadyforWork, you must already be at the tail end of your degree course and available to commit to the program.
                    </p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Help