import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import { motion } from "framer-motion"

const Home = () => {

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default Home