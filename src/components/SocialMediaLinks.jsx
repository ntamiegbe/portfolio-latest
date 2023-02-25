import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, animate } from "framer-motion"

const SocialMediaLinks = () => {
    return (
        <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='flex items-center justify-center pt-20 space-x-5'>
            <a href="https://github.com/ntamiegbe" target="_blank" rel="noopener noreferrer">
                <FiGithub href='#home' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="https://www.linkedin.com/in/ntami-egbe-39a235209/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="https://twitter.com/ntamiegbe" target="_blank" rel="noopener noreferrer">
                <FiTwitter href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="https://wa.link/k4q6b8" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
        </motion.div>
    )
}

export default SocialMediaLinks