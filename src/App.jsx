import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Navigation from './Components/Navigation'
import Services from './Pages/Services'

const App = () => {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App