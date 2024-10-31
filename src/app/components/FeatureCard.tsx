import React from 'react'
import { FeatureImageProps } from '../../../types/PropTypes'
import Image from 'next/image'

function FeatureCard(Props:FeatureImageProps) {
    return(
    <div className="flex flex-col font-heebo lg:flex-row md:flex-row justify-start mx-0 sm:mx-10 md:mx-0 lg:mx-0 gap-5 mb-20">
    <div>
<Image 
src={Props.href}
alt={Props.alt}
width={300}
height={300}
className="w-full  md:w-[246px] md:h-[180px]  rounded-md"
/> 
    </div>
    <div className="w-[70%] lg:w-[47%] md:w-[45%]">
      <h3 className=" font-bold text-2xl md:text-3xl pb-4">
      Designing Dashboards
      </h3>
      <div className="flex gap-4 pb-4">
      <span className="bg-[#F98585] text-white px-3 pt-0.5 rounded-full">
          2020
      </span>
      <span className="text-xl text-[#0000009E] ">
      Dashboard
      </span>
      </div>
      <p className=" md:text-xl lg:text-xl text-[18px] ">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
  </div>
  )
}

export default FeatureCard