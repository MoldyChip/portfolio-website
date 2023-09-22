import { Link, useMatch, useResolvedPath } from "react-router-dom"
import linkedin from '../assets/linkedin-icon.png'
import TE from '../assets/TE-icon.png'

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

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}