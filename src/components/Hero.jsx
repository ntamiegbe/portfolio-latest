import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMediaLinks from '../components/SocialMediaLinks'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='flex flex-col px-[2rem] max-w-[800px] h-screen justify-end md:justify-center py-[10rem]'
        >
            <h1 className='text-secondary-200 font-bold lg:text-[30px] text-[20px]' id='name'>
                Hi, I'm Ntami
            </h1>
            <h1 className='text-lightgray lg:text-[70px] text-[40px]'>
                <span>
                    <Typewriter
                        words={['Frontend Developer', 'Sofware Engineer']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
                        deleteSpeed={60}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <p className='text-gray text-[20px] md:text-3xl max-w-[850px]'>Highly skilled developer with a passion for creating beautiful, functional and user-friendly websites.
            </p>
            <div className="mt-[2rem] px-2 flex space-x-7">
                <a href="#projects" class="relative px-6 py-3 font-bold text-black group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-secondary-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-secondary-300 rounded"></span>
                    <span className="relative text-white text-[18px]">Projects</span>
                </a>
                <a href="#contact" class="px-6 py-4 font-bold text-base border-2 border-secondary-300 text-white hover:text-secondary-200">
                    <span className="text-[18px]">Get in Touch</span>
                </a>
            </div>
        </motion.div>
    )
}

export default Hero