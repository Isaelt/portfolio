import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
