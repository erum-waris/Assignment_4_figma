import Link from 'next/link'
import React from 'react'
import { PropType } from '../../../types/PropTypes'

function Navlinks(Props:PropType) {
  return (
    <div className="text-xl md:text-2xl lg:text-2xl text-[#000000]">
        <Link href={Props.href} > {Props.title}</Link>
    </div>
  )
}

export default Navlinks