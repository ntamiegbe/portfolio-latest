import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMediaLinks from '../components/SocialMediaLinks'

const Home = () => {

  return (
    <div className="flex dark:bg-dark bg-light h-screen py-[100px] relative">
      <div className="hidden md:flex flex-1">
        <SocialMediaLinks />
      </div>
      <div className='flex flex-2 flex-col px-[2rem]'>
        <h1 className='text-secondary-200 font-bold lg:text-[30px] text-[20px]'>
          Hi, I'm Ntami
        </h1>
        <h1 className='text-[#CCD6F6] lg:text-[90px] text-[50px]'>
          <span>
            <Typewriter
              words={['Frontend Web Developer', 'Sofware Engineer']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className='text-gray text-4xl max-w-[850px]'>I am a highly skilled developer with a passion for creating beautiful, functional, and user-friendly websites. I specialize in modern front-end technologies such as React. My goal is to work with you to bring your vision to life and create a website that not only looks great but also performs well and provides a seamless user experience.
        </p>
        <div className="mt-[2rem] px-2">
          <a href="#_" class="relative px-6 py-3 font-bold text-black group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-secondary-100 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-secondary-300 rounded"></span>
            <span className="relative text-gray text-[18px]">My Blog</span>
          </a>
        </div>
      </div>
      <div className="hidden md:flex flex-1 relative">
        <a href='' className='lowercase text-secondary-300 hover:text-secondary-200 text-3xl absolute bottom-[250px] right-20 rotate-90'>
          ntamiegbe00@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Home