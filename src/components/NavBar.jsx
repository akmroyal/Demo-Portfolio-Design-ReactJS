import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import logo from '../assets/svg/logo.svg'

const NavBar = () => {
  return (
    <nav className='z-20 navbar w-screen flex justify-between items-center py-6 px-10'>
      <div className=''>
        <div className='logo cursor-pointer'>
          <span>
            <img src={logo} alt='logo' className='w-12 -rotate-30'/>
          </span>
        </div>
      </div>
      <ul className='w-lg flex justify-around p-1 rounded-full'>
        <li><a href="/">Home</a></li>
        <li><a href="#about-text">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className='flex justify-around items-center gap-3.5'>
        <div className='relative flex overflow-x-hidden'>
          {/* <HamburgerMenu /> */}
          HM
        </div>
        <button className='-tracking-[0.2rem] border-3 rounded-full p-1 flex justify-between items-center gap-1.5 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-gray-800'>
          <span>Contact</span>
          <span><FaArrowRight className='text-[#3d94ff]'/></span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
