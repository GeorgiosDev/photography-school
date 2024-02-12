import Navbar from '@/scenes/Navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import Home from './scenes/Home'
import Benefits from '@/scenes/Benefits'
import Features from '@/scenes/Feautures.tsx'
import Courses from '@/scenes/Courses/index.tsx'
import ContactUs from '@/scenes/ContactUs/index.tsx'
import Footer from "@/scenes/Footer/index.tsx"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <div className="app bg-gray-20 ">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Features />
      <Courses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  )
}

export default App
