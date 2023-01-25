import React from 'react'
import Card from './Card'

const Projects = () => {
    return (
        <section className='dark:bg-dark bg-light py-[150px]'>
            <div className="max-w-[800px] px-2 container mx-auto flex-col">
                <div className="text-secondary-200 px-6">
                    <h1 className='text-lightgray text-6xl mb-8'>Bringing Ideas to Life: <span className='text-secondary-200'>A Showcase of My Web Development Projects</span></h1>
                </div>
                <div className="">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Projects