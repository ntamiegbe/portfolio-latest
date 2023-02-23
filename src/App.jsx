import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AnimatedCursor from "react-animated-cursor"
import FeaturedProject from './components/FeaturedProject'

function App() {

  const projects = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://cdn.dribbble.com/users/1774675/screenshots/15012941/media/dd8198c65c34726f98d860982a651b97.png?compress=1&resize=400x300',
    },
    {
      title: 'Project 2',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      technologies: ['Vue', 'SCSS', 'GreenSock'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhbMZawn3_-0Ud7jJ0tDOBGMN0hC5CqloUw&usqp=CAU',
    },
    {
      title: 'Project 3',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologies: ['Angular', 'Bootstrap', 'Animate.css'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaVxRw5J2SMF5hhCEtGy9eb6xzh0Q6syX7w&usqp=CAU',
    },
  ];
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
