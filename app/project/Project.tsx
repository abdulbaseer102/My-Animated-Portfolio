import React from 'react'
import ProjectCard from '../../components/sub/ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-[white]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
        </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard 
          src='/NextWebsite.png'
          title='Modren Next Js Portfolio'
          description=' Lorem ipsum dolor sit amet lorem et justo odio null et just euismod tempor incididunt ut labore et dolore magna aliqu lorem'
          />
            <ProjectCard 
          src='/CardImage.png'
          title='Interactive Website Cards'
          description=' Lorem ipsum dolor sit amet lorem et justo odio null et just euismod tempor incididunt ut labore et dolore magna aliqu lorem'
          />
            <ProjectCard 
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description=' Lorem ipsum dolor sit amet lorem et justo odio null et just euismod tempor incididunt ut labore et dolore magna aliqu lorem'
          />
      </div>
    </div>
  )
}

export default Project
