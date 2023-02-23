import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMediaLinks from '../components/SocialMediaLinks'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <>
            <div className="hidden lg:flex flex-1 relative">
                <SocialMediaLinks />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.7 }}
                className='flex flex-2 flex-col px-[2rem] max-w-[800px]'
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
                    <a href="#_" class="relative px-6 py-3 font-bold text-black group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-secondary-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
                        <span className="absolute inset-0 w-full h-full border-2 border-secondary-300 rounded"></span>
                        <span className="relative text-white text-[18px]">Projects</span>
                    </a>
                    <a href="#_" class="px-6 py-4 font-bold text-base border-2 border-secondary-300 text-white hover:text-secondary-200">
                        <span className="text-[18px]">Get in Touch</span>
                    </a>
                </div>
            </motion.div>
            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className="hidden lg:flex flex-1 relative">
                <a href='mailto:ntamiegbe00@gmail.com' className='text-secondary-300 hover:text-secondary-200 text-3xl absolute right-20 rotate-90 bottom-10'>
                    ntamiegbe00@gmail.com
                </a>
            </motion.div>
        </>
    )
}

export default Hero