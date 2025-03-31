import React from 'react'
import ProjectsShow from '../../components/ProjectsShow'
import ContactHead from '../../components/ContactHead'

const Portfolio = () => {
    return (
        <div id="projects" className='relative flex pt-[10vw] flex-col items-center gap-34'>
            <div className='flex flex-col items-center gap-7'>
                <h1 className='heading-font text-8xl'>PORTFOLIO</h1>
                <h3>Design Work and website's</h3>
            </div>
            <div className='w-full px-[6%]'>
                <ProjectsShow />
                <ContactHead />
            </div>
        </div>
    )
}

export default Portfolio
