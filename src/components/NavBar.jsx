import { Link } from "react-router-dom"
import CustomLink from "./CustomLink.jsx"
import { linkedin, TE } from '../assets/images.jsx'

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul className="site-container">
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <Link className="icon-container" to="https://www.linkedin.com/in/jimmienakadaira/">
            <img className="linkedin-icon" src={linkedin}/>
            </Link>
            <Link to="https://blue.mbsy.co/6t8l6p">
                <img className='TE-icon' src={TE} />
            </Link>

        </ul>
    </nav>
}