import React from 'react'
import RecentpostBox from './RecentpostBox'

function RecentPost() {
  return (
    <>
    <div className="bg-[#f2e0e0] w-auto md:w-full lg:w-full h-[full] lg:h-[502px] absolute top-[875px] md:top-[745px] p-10 m-0">

    <div className="flex  justify-between md:mx-36  lg:mx-36  mb-2">
    <h1 className="text-[#000000] text-[22px]">
        Recent Post
    </h1>
    <h1 className=" text-[#F98585] text-[22px]  ">
        View All
    </h1>
    </div>
  <div className="flex flex-col gap-8 md:justify-center md:gap-8 lg:flex-row lg:justify-center lg:gap-12 ">
   
   
    < RecentpostBox />
   
    
    
    < RecentpostBox />

   
   
  </div>



    </div>
    </>
    
  )
}

export default RecentPost