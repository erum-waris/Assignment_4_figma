import Image from 'next/image'
import React from 'react'





function HeroSection() {
  return (
    <>
    
        <div className=" pb-[200px] md:pb-0 lg:pb-0 flex justify-center items-center absolute top-[140px] flex-col-reverse md:flex-row sx:justify-around  sm:top-[140px] md:top-[200px] lg:top-[200px]  md:justify-around  lg:justify-between lg:h-[308px] lg:w-[1030px] font-heebo ">
        <div className="lg:w-[521px] lg:h-[305px]">
            <h1 className=" text-[#21243D] text-4xl p-5 sm:text-4xl md:text-5xl lg:text-5xl font-[900] ">
            Hi, I am John,
             Creative Technologist
            </h1>
            <p className="font-[16px] p-5 ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <button className="ml-5 bg-[#f78688] w-[180px] h-[40px] md:w-[205px] md:h-[50px] h:w-[205px] lg:h-[50px] mt-5 hover:bg-[#3a3a41] hover:text-white ">
                Download Resume</button>
        </div>
        <div className=" mb-5 lg:w-[298px] lg:h-[308px] md:w-[298px] md:h-[308px] w-[250px] h-[250px] ">
            <Image 
            src="/images/hero-image.svg" 
            alt="hero-img"
            width={300}
            height={300}
            className=" size-[250] sm:size-[300] md:size-[300] lg:size-[300]"
            />
        </div>
         </div>
        
   
    </>
  )
}

export default HeroSection