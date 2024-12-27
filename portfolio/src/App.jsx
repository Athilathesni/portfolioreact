import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
   <Main />
   <Nav/>
   <Projects/>
  </>
  )
}

export default App
