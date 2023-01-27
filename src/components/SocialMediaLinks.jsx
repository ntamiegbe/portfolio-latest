import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, animate } from "framer-motion"

const SocialMediaLinks = () => {
    return (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className='absolute justify-center items-center left-20 -bottom-[90px] flex flex-col'>
            <a href="#_">
                <FiGithub href='#home' className='text-[25px] text-secondary-300 hover:text-secondary-200 mb-8' />
            </a>
            <a href="#_">
                <FiLinkedin href='' className='text-[25px] text-secondary-300 hover:text-secondary-200 mb-8' />
            </a>
            <a href="#_">
                <FiTwitter href='' className='text-[25px] text-secondary-300 hover:text-secondary-200 mb-8' />
            </a>
            <a href="#_">
                <FaWhatsapp href='' className='text-[25px] text-secondary-300 hover:text-secondary-200 mb-8' />
            </a>
            <hr className='text-secondary-200' />
        </motion.div>
    )
}

export default SocialMediaLinks