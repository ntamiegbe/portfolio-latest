import React from 'react'
import Scene from './Scene'
import Card from './Card'

const About = () => {
    return (
        <section className='dark:bg-dark bg-light py-[20px] '>
            <div className="max-w-[800px] px-2 container mx-auto flex-col">
                <div className="flex items-center justify-center h-[450px] relative">
                    <div className="">
                        <Scene />
                    </div>
                </div>
                <div className="text-secondary-200 px-6">
                    <h1 className='text-lightgray text-6xl sm:text-20px mb-8'>Crafting Exceptional User Experiences: <span className='text-secondary-200'>About Me</span></h1>
                    <p className='text-gray text-3xl'>As a frontend developer, I have a passion for creating visually appealing and user-friendly websites and applications. I am experienced in using a variety of technologies, including <span className='text-secondary-200 font-semibold'>React, NextJS, Tailwind CSS Bootstrap, Laravel, Material UI, SASS/SCSS, Redux, Firebase, and Node.</span> I have a strong understanding of web development principles and i'm always eager to learn new technologies and techniques to improve my skills. </p>
                    <p className='text-gray text-3xl mt-5'>My goal is to create web experiences that are not only beautiful but also functional and accessible to all users. Whether it's a simple landing page or a complex web application, I am dedicated to delivering high-quality, polished products that meet the needs of my clients and their users.</p>
                </div>
            </div>
        </section>
    )
}

export default About