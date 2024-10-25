
import React from 'react'
import Navlinks from './Navlinks'

function Navbar() {
  return (
    <div className="font-Inter flex absolute md:right-10 right-7 lg:right-14 gap-4 md:gap-7 lg:gap-9 w-[full] h-[67px] mt-10">
      < Navlinks  href="/works" title="Works" />
      < Navlinks  href="/blog" title="Blog" />
      < Navlinks  href="/contact" title="Contact" />
    </div>
  )
}

export default Navbar