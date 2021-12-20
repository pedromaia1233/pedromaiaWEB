import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
//import Works from "./components/works/Works";
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom"


function App() {
  const[menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(false)
}

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <Router>
      <div className="sections">
        <Routes>
            <Route exact path="/" element={<Intro/>} />
            <Route exact path="sobre" element={<About />} />
            <Route exact path="portfolio" element={<Portfolio />} />
            <Route exact path="testemunhos" element={<Testimonials />} />
            <Route exact path="contacto" element={<Contact />} />
          </Routes>
      </div>
          
          <div className={"menu " + (menuOpen && "active")}>
                  <ul>
                  <li onClick={() => setMenuOpen(false)}>
                      <Link to="/">Início</Link>
                  </li>
                  <li onClick={() => handleClick()}>
                      <Link to="/sobre">Sobre mim</Link>
                  </li>
                  <li onClick={() => setMenuOpen(false)} >
                      <Link to="/portfolio">Portfolio</Link>
                  </li>
                  
                  <li onClick={() => setMenuOpen(false)}>
                      <Link to="/testemunhos">Testemunhos</Link>
                  </li>
                  <li onClick={() => setMenuOpen(false)}>
                      <Link to="/contacto">Contacto</Link>
                  </li>
              </ul>
        </div>
        </Router>

      
    </div>
  );
}

/* 
<Intro/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>*/

export default App;
