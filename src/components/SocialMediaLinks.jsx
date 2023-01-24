import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <div className='text-white px-[70px] flex flex-col space-y-14 absolute bottom-[250px]'>
            <a href="#_">
                <FiGithub href='#home' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="#_">
                <FiLinkedin href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="#_">
                <FiTwitter href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <a href="#_">
                <FaWhatsapp href='' className='text-[25px] text-secondary-300 hover:text-secondary-200' />
            </a>
            <hr className='text-secondary-200' />
        </div>
    )
}

export default SocialMediaLinks