import React from 'react'
import Scene from './Scene'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="max-w-[800px] px-2 container mx-auto flex-col">
            <div className="flex items-center w-full justify-center h-[150px] relative">
                <Scene />
            </div>
            <div className="pb-20">
                <motion.h1
                    className='text-lightgray text-6xl sm:text-20px mb-8'
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >Crafting Exceptional User Experiences: <span className='text-secondary-200'>About Me</span></motion.h1>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-gray text-3xl'>As a frontend developer with over two years experience, I have a passion for creating visually appealing and user-friendly websites and applications. I am experienced in using a variety of technologies, including <span className='text-secondary-200 font-semibold'>React, NextJS, Tailwind CSS, Bootstrap, Laravel, Material UI, SASS/SCSS, Redux, Firebase, and Node.</span> I have a strong understanding of web development principles and i'm always eager to learn new technologies and techniques to improve my skills. </motion.p>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-gray text-3xl mt-5'>My goal is to create web experiences that are not only beautiful but also functional and accessible to all users. Whether it's a simple landing page or a complex web application, I am dedicated to delivering high-quality, polished products that meet the needs of my clients and their users.</motion.p>
            </div>
        </div>
    )
}

export default About