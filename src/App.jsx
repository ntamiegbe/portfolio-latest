import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import SingleProject from './pages/SingleProject'
import Navbar from './components/Navbar'
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <Router>
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
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<SingleProject />} path='/projects/:slug' />
      </Routes>
    </Router>
  )
}

export default App
