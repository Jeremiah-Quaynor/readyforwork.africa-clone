import React,{useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link"
import banner from "../public/images/RFW_logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


function Hero() {
    const [ismobile, setIsMobile] = useState(false)
    const [shadow, setShadow] = useState("")

    const handleNav = () => {
        setIsMobile(prev=>!prev)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShadow("bg-[#03564E]")
            } else {
                setShadow("bg-inherit")
            }
        });
    }, [shadow]);


  return (
    <div className='relative w-full h-[100vh] bg-[url("/images/contact_banner.png")] bg-no-repeat bg-cover'>
        <div className='sm:hidden w-full top-0 h-[10vh] sm:h-24 absolute z-50 flex justify-between items-center'>
                <Link href="/" className="w-[100px] pl-6">
                    <Image src={banner} alt={"banner"} />
                </Link> 
                <div onClick={handleNav} className='rounded-full p-10 cursor-pointer'>
                    <AiOutlineMenu size={25} color='white '/> 
                </div>
            </div>
            {/* mobile navbar */}
            <div className={ismobile ? 'absolute top-0 right-0 w-[70%] h-[100vh] z-50  text-white':''}>
                <div className={
                        ismobile 
                        ? 'fixed right-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-auto text-white  p-10 bg-[#03564E]'
                        : 'fixed left-[100%] top-0 p-1 ease-in duration-500 text-white '}>
                    <div>
                        <div className='w-full flex justify-end'> 
                            <div onClick={handleNav} className='rounded-full p-3 cursor-pointer'>
                                <AiOutlineClose size={25} color='white '/>
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-full pl-8'>
                        <Link href="/">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>Home</h2>
                        </Link>
                        <Link href="/about">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>For Education</h2>
                        </Link>
                        <Link href="/projects">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>For Business</h2>
                        </Link>
                        <Link href="/contact">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>Coaching</h2>
                        </Link>
                        <Link href="/contact">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white font-bold active:text-blue-800 text-xl my-5'>Contact</h2>
                        </Link>
                        <Link href="/contact">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>Give</h2>
                        </Link>
                        <Link href="/contact">
                            <h2 onClick={()=>setIsMobile(!ismobile)} className='text-white active:text-blue-800 text-xl my-5'>Login</h2>
                        </Link>
                    </div>

                </div>
            </div>
        
        <div className={`sticky hidden sm:block  top-0 h-[10vh] w-full ${shadow} z-50`}>
            <div className="w-full h-full flex justify-between">
                    <div className="w-[180px] h-[8vh] ml-10">
                        <Link href="/" className="w-full h-full">
                            <Image src={banner} alt={"banner"} className="w-full h-full p-5" draggable={false}/>
                        </Link> 
                    </div>
                    <div className="w-[55%] h-full mr-10">
                        <ul className=" w-auto h-full flex justify-evenly items-center text-white font-bold">
                            <li>
                                Home
                            </li>
                            <li>
                                For Education
                            </li>                            
                            <li>
                                For Business
                            </li>
                            <li>
                                Coaching
                            </li>
                            <li className="border-2 border-green-200 w-[120px] h-[40px] py-2 text-center rounded-2xl">
                                Contact
                            </li>
                            <li>
                                Give
                            </li>
                            <li>
                                Login
                            </li>
                        </ul>
                    </div>
            </div>

        </div>
        
        <div className=" absolute bottom-14 ml-14">
            <p className="text-6xl font-extrabold text-white">Contact us</p>
        </div>

    </div>
  )
}

export default Hero