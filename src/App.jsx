import Footer from './Components/Pages/Footer/Footer'
import './App.css'
import Navbar from './Components/Header/Navbar'
import About from './Components/Pages/About/About'
import Contacts from './Components/Pages/Contact/Contacts'

import Home from './Components/Pages/Home/Home'

import ProjectSection from './Components/Pages/Projects/ProjectSection'
import Skill from './Components/Pages/Skill/Skill'



function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    
    <Skill></Skill>
    <ProjectSection></ProjectSection>
    <Contacts></Contacts>
    <Footer></Footer>
    
      
    </>
  )
}

export default App
