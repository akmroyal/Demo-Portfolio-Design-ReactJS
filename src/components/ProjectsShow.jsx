import React from 'react'

const ProjectsShow = () => {
  const projectDetails = [
    {
      "id": "01",
      "name": "Sidcum Family",
      "details": "some para about above project",
      "date": "2023 . 02"
    },
    {
      "id": "02",
      "name": "TwitTube",
      "details": "some para about above project",
      "date": "2023 . 02"
    }
  ]
  return (
    <>
      {projectDetails.map((project, index) => (
        <div className='relative cursor-pointer flex items-center justify-between border-t-3 border-white w-full p-[3%]'>
          <div key={index} className=''>
            <h1 className='heading-font text-7xl hollow'>{project.id}</h1>
          </div>
          <div className='w-[80%] py-0.5'>
            <h1 className='subHeading-font text-5xl font-bold tracking-tighter'>{project.name}</h1>
            <h3 className='stylish-font text-2xl'>{project.details}</h3>
          </div>
          <div>
            <h1 className='stylish-font font-bold'>{project.date}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectsShow
