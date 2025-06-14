import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Blog from './Pages/Blog'
import Dropdown from './Pages/Dropdown'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Portfollio from './Pages/Portfollio'


// const Layout = ({ children }) => {
//   const location = useLocation();
//   const hideNavFooter = location.pathname === '/*'; // Or customize paths

//   return (
//     <>
//       {!hideNavFooter && <Navbar />}
//       {children}
//       {!hideNavFooter && <Footer />}
//     </>
//   );
// };

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <main className="main-content" style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfollio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dropdown" element={<Dropdown />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer/>
      </React.Fragment>
    </Router>
  )
}

export default App
