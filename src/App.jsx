import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AnimatedCursor from "react-animated-cursor"
import FeaturedProject from './components/FeaturedProject'
import { useState, useEffect } from 'react';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://pshyhqa6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%27featuredProjects%27%5D%7B%0A%20%20_id%2C%0A%20%20%20%20description%2C%0A%20%20%20%20githubLink%2C%0A%20%20%20%20projectImage%2C%0A%20%20%20%20projectLink%2C%0A%20%20%20%20projectName%2C%0A%20%20%20%20technologiesUsed%0A%7D')
      .then(response => response.json())
      .then(data => setProjects(data.result))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
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
      <section id='home' className="flex dark:bg-dark bg-light py-[100px] relative items-center justify-center w-full">
        <Hero />
      </section>
      <section id='about' className='dark:bg-dark bg-light py-[20px] px-5 md:px-0'>
        <About />
      </section>
      <section id='projects' className='dark:bg-dark bg-light px-5 md:px-0 py-[100px]'>
        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} />
        ))}
        <Projects />
      </section>
    </>
  )
}

export default App
