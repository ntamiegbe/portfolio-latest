import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <div className='absolute justify-center items-center left-20 -bottom-[90px] flex flex-col'>
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
        </div>
    )
}

export default SocialMediaLinks