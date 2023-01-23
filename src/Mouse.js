import {useRef} from 'react'
import './App.css'

const Mouse = () => {
    const delay = 18
    
    const dot = useRef(null)
    const dotOutline = useRef(null)

  return (
    <>
    <div ref={dotOutline} className="cursor-dot-outline"></div>
    <div ref={dot} className="cursor-dot"></div>
    </>
  )
}

export default Mouse