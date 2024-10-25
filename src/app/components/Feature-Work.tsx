import React from 'react'
import FeatureCard from './FeatureCard'

function FeatureWork() {
  return (
    <div className='relative top-[45%] sm:top-[45%] md:top-[1250px] lg:top-[1250px] mx-8 sm:mx-20 md:mx-20 lg:mx-40 my-20 w-full'>
    <h2 className='font-heebo font-semibold lg:text-xl text-xl pb-8'>Featured Works</h2>
  <FeatureCard href="/images/img1.png" alt="Image_1"/>
  <FeatureCard href="/images/img2.png" alt="Image_2"/>
  <FeatureCard href="/images/img3.png" alt="Image_"/>
</div>
  )
}

export default FeatureWork 