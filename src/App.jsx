import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AlertTicker from './components/AlertTicker'
import Hero from './components/Hero'
import Impact from './components/Impact'
import HowItWorks from './components/HowItWorks'
import Capabilities from './components/Capabilities'
import LiveOperations from './components/LiveOperations'
import Partners from './components/Partners'
import GetInvolved from './components/GetInvolved'
import Footer from './components/Footer'
import Icon from './components/Icon'

export default function App() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
      setProgress(Math.min(scrolled, 1))
      setShowTop(h.scrollTop > 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <Navbar />
      <AlertTicker />
      <main>
        <Hero />
        <Impact />
        <HowItWorks />
        <Capabilities />
        <LiveOperations />
        <Partners />
        <GetInvolved />
      </main>
      <Footer />

      <button
        className={`to-top ${showTop ? 'to-top--on' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrow" size={20} style={{ transform: 'rotate(-90deg)' }} />
      </button>
    </>
  )
}
