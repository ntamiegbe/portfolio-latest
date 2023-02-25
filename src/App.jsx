import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AnimatedCursor from "react-animated-cursor"
import FeaturedProject from './components/FeaturedProject'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

function App() {

  return (
    <div className='dark:bg-dark bg-light snap-y snap-mandatory'>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='134,194,50'
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Navbar />
      <section id='home' className="flex items-center justify-center w-full snap-center">
        <Hero />
      </section>
      <section id='about' className='py-[60px] px-5 md:px-0 snap-center'>
        <About />
      </section>
      <section id='projects' className='py-[60px] px-5 md:px-0 snap-center'>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 80, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-lightgray text-6xl max-w-[800px] mx-auto sm:text-20px pb-40'>Web Development Creations Showcase: <b className='text-secondary-200'>My Portfolio</b></motion.h1>
        <FeaturedProject />
      </section>
      <section className='py-[60px] px-5 md:px-0 snap-center'>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-secondary-200 text-4xl px-4 text-center'>Other Projects
        </motion.h1>
        <Projects />
      </section>
      <section id='testimonials' className="py-[60px] px-5 md:px-0 snap-center">
        <Testimonial />
      </section>
      <section id='contact' className="py-[20px] px-5 md:px-0 snap-center">
        <Contact />
      </section>
    </div>
  )
}

export default App
