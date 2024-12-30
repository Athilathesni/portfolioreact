import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Resume from './components/Resume'



function App() {
  const [count, setCount] = useState(0)

  return (
     <>
   <Main />
   <Nav/> 
   <About/>
   <Skills/>
   <Projects/>
   <Contact />
   <Footer/>
   <Resume/>
  
  
  </>
  )
}

export default App

