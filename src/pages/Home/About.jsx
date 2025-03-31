import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SvgImg from '../../components/SvgImg'
import { Link, Links } from 'react-router-dom'

const About = () => {
  return (
    <div id='about-text' className='about-page relative pt-[10vw] flex justify-center flex-col'>
      <div className='relative w-full flex justify-center mb-44'>
        <h1 className='text-9xl text-[#3d94ff]'>ABOUT ME</h1>
      </div>
      <div className='flex justify-around m-auto items-center'>
        <p className='w-xl text-white tracking-widest'>
          Hello, this is Ashutosh Maurya, a Full-Stack Developer | DSA & Competitive Programmer | UI/UX Enthusiast | Tech Explorer | Blogger | Free for Opportunities!
        </p>
        <Link to="/about-me" className='cursor-pointer'>
          <div className='more-btn flex justify-between gap-1.5 items-center border-3 rounded-full p-2 text-xl font-semibold cursor-pointer transition overflow-hidden'>
            <span>Know more</span>
            <span><FaArrowRight className='text-[#3d94ff]' /></span>
          </div>
        </Link>
      </div>
      {/* Trying Svg's for design */}
      <div className="relative mt-[10vw] flex justify-center">
        <SvgImg />
      </div>
    </div>
  )
}

export default About
