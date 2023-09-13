import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul className="site-container">
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <Link className="icon-container" to="https://www.linkedin.com/in/jimmienakadaira/">
            <img className="linkedin-icon" src="src\assets\linkedin-icon.png"/>
            </Link>
            <Link to="https://blue.mbsy.co/6t8l6p">
                <img className='TE-icon' src='src\assets\TE-icon.png' />
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