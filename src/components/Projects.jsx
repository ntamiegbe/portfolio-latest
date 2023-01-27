import React from 'react'
import ProjectSection from './ProjectCard'

const Projects = () => {
    return (
        <section className='dark:bg-dark bg-light py-[150px]'>
            <div className="max-w-[800px] px-2 container mx-auto flex-col">
                <div className="text-secondary-200">
                    <h1 className='text-lightgray text-6xl px-4'>Web Development Creations Showcase: <b className='text-secondary-200'>My Projects</b></h1>
                    <ProjectSection />
                </div>
            </div>
        </section>
    )
}

export default Projects