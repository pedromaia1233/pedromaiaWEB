import "./menu.scss";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
//import Works from "./components/works/Works";
import Contact from "../contact/Contact"
import About from "../about/About"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom"

export default function Menu({menuOpen, setMenuOpen}) {
    const handleClick = () => {
        setMenuOpen(false)
    }


    return (
        <div className={"menu " + (menuOpen && "active")}>
            <Router>
                <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/">Início</Link>
                </li>
                <li onClick={() => handleClick()}>
                    <Link to="/about">Sobre mim</Link>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/testimonials">Testemunhos</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            </Router>
        </div>
    )
}
