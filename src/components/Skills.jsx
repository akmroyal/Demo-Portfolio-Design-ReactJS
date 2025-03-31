import React from 'react'
import fullstack from '../assets/svg/fullstack.svg'
import programmer from '../assets/svg/programmer.svg'

const Skills = () => {
    return (
        <section className='skills relative w-full mt-32 px-[9.5rem] flex flex-col'>
            <div className='relative flex items-center'>
                <h2 className='text-6xl heading-font flex flex-col gap-2.5 font-extrabold tracking-wide'>
                    <span className='flex gap-2'>
                        <span>WHAT</span>
                        <span className='text-[#3d94ff]'>SKILLS</span>
                    </span>
                    <span>CAN I HAVE</span>
                </h2>
                <span className='relative heading-font quist-mark text-[12rem] right-6.5 rotate-14'>?</span>
            </div>
            <div className='skills-info relative flex flex-col gap-[13rem]'>
                {/* Full-stack */}
                <div className='relative flex items-center gap-[2rem] left-[45%]'>
                    <div className=''>
                        <p className='flex flex-col text-5xl gap-2.5'>
                            <span className='subHeading-font tracking-tighter font-semibold text-4xl'>I'M A</span> <span className='heading-font text-[#3d94ff] tracking-wide font-semibold'>FULLSTACK</span><span className='heading-font text-[#3d94ff]  font-semibold tracking-wide'>DEVELOPER</span>
                            <span className='hollow  heading-font'>01</span>
                        </p>
                    </div>
                    <div className='image-container'>
                        <img src={fullstack} alt="fullstack" className='w-[50%]'/>
                    </div>
                </div>
                {/* Programmer skill */}
                <div className='relative flex items-center gap-[2rem] left-[15%]'>
                    <div className=''>
                        <p className='flex flex-col text-5xl gap-2.5'>
                            <span className='subHeading-font tracking-tighter font-semibold text-4xl'>I'M A</span> <span className='heading-font text-[#3d94ff] tracking-wide font-semibold'>PROGRAMMER /</span>
                            {/* <span className='heading-font text-[#3d94ff]  font-semibold tracking-wide'></span> */}
                            <span className='heading-font text-[#3d94ff]  font-semibold tracking-wide'>PROBLEM SOLVER</span>
                            <span className='hollow  heading-font'>02</span>
                        </p>
                    </div>
                    <div className='image-container'>
                        <img src={programmer} alt="fullstack" className='w-[70%]'/>
                    </div>
                </div>
                {/* Designer skill */}
            </div>
        </section>
    )
}

export default Skills
