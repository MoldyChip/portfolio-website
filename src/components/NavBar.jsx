import { Link } from "react-router-dom"
import CustomLink from "./CustomLink.jsx"
import { linkedin, TE } from '../assets/images.jsx'
import Modal from "./Modal.jsx"
import Contact from "./Contact-Me.jsx"
import React, {useState} from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function isClicked() {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    };
    
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul className="site-container">
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink onClick={() => {isClicked()}}>
                Contact
            </CustomLink>
            <Link className="icon-container" to="https://www.linkedin.com/in/jimmienakadaira/">
            <img className="linkedin-icon" src={linkedin}/>
            </Link>
            <Link to="https://blue.mbsy.co/6t8l6p">
                <img className='TE-icon' src={TE} />
            </Link>
            <Modal open={isOpen} onClose={closeModal}>
                <Contact/>
            </Modal>
        </ul>
    </nav>
}