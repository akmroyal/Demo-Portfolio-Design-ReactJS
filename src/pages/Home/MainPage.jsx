import React from 'react'
// import NavBar from '../components/NavBar'
// import glow from '../assets/image/BluryImage.png'

const MainPage = () => {
  return (
    <div className='overflow-x-hidden z-10 mt-15'>
      <div className='h-lvh flex justify-center items-center'>
        <div className='center-content w-160 h-110 flex flex-col justify-center items-center text-9xl font-black gap-5'>
          <span><span></span>BE WILD!</span>
          <span className='text-[#3d94ff]'>CREATIVE!</span>
          <span>AND COOL!</span>
          <span></span>
        </div>
      </div>
      {/* glow ball */}
      <div className='glow1'></div>
      <div className='glow2'></div>

      {/* Line Animation */}
      <div className='line'>
        <div className='top-30 -rotate-12'></div>
        <div className='top-88 left-94 rotate-45'></div>
        <div className=' top-140 right-130 -rotate-65 '></div>
        <div className='top-160 -rotate-6'></div>
      </div>
    </div>
  )
}

export default MainPage
