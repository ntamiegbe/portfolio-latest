import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  return (
    <div className='dark:bg-dark bg-light h-screen p-4 flex items-center justify-center flex-col'>
      <h1 className='text-secondary-200 text-[30px]'>
        Hi, I'm {' '}
        <span>
          <Typewriter
            words={['Ntami', 'a Frontend Web Developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default Home