import VGD from '../assets/VGD/VGD.png'
import tenmo from '../assets/tenmo/Tenmo-payment.png'
import candyshop from '../assets/candyshop/CandyShop.png'
import React, {useState} from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const projectVGD = [
    {src: VGD, id: "VGD1", className: "VGD"},
    {src: 'src/assets/VGD/VGD2.png', id: "VGD2", className: "VGD"}
]

const projectTenmo = [
    {src: tenmo, id: "tenmo1", className: "tenmo"},
    {src: tenmo, id: "tenmo2", className: "tenmo"}
]

const projectCandyshop = [
    {src: candyshop, id: "candyshop1", className: "candyshop"},
    {src: candyshop, id: "candyshop2", className: "candyshop"}
]

export default function Projects() {
    return (<>
        <ul className="project-container">
            <div className="card">
            <li>
                <VgdCarousel data={projectVGD}  />
                <a className='bottom-card' href='https://github.com/MoldyChip/videogame-database-website'>
                <h1 className="project-title">Videogame Database Website</h1>
                <p className="project-p">RESTful API server with ASP.NET and Vue.js/Bootstrap client. New users can register accounts, view/search the database, create custom lists (currently played/playing/ want to play), post reviews/ratings/comments, view your profile that contains all your reviews/ratings/comments/custom lists. Admins can add/edit games within the database, delete current users/reviews/ratings/comments. Used SSMS for SQL database and Postman to test server-side results.</p>
                </a>
                </li>
            </div>
            <div className="card">
            <li>
                <VgdCarousel data={projectTenmo}/>
                <a className='bottom-card' href='https://gitfront.io/r/jimknaka/tWmSgxKAa7cd/tenmo-payment/' >
                <h1 className="project-title">Tenmo Payment App</h1>
                <p className="project-p">RESTful API server with ASP.NET and command-line application in Visual Studio using C#. New users can register accounts, log-in with JWT authentication, send/request money, approve/reject requests, and view past and pending transfers. Used SSMS for SQL database and Postman to test server-side results.</p>
                </a>
                </li>
            </div>
            <div className="card" >
            <li>
                <VgdCarousel data={projectCandyshop}/>
                <a className='bottom-card' href="https://gitfront.io/r/jimknaka/iqJkEPPFCDsE/candy-shop/" >
                <h1 className="project-title">CandyShop</h1>
                <p className="project-p">Is a C# application that simulates a cash register at a candy store. It keeps track of your balance, the shop's inventory and logs a receipt of the transaction.</p>
                </a>
                </li>
            </div>
        </ul>
    </>)
}

function VgdCarousel ({data}) {
    const [slide, setSlide] = useState(0);
    const [expandedImage, setExpandedImage] = useState(null);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    const toggleImageExpansion = (index) => {
        setExpandedImage(expandedImage === index ? null : index);
      };

    return (
        <div className='carousel'>
          <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
          {data.map((item, index) => (
            <img onClick={() => toggleImageExpansion(index)} style={{transform: expandedImage === index ? "scale(1.75)" : "scale(1)", transition: "transform 0.25s ease",zIndex: expandedImage === index ? 1 : 0}} className={slide === index ? "slide" : "slide-hidden"} src={item.src} id={item.id} key={index} />
          ))}
          <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
          <span className='indicators'> 
            {data.map((_, index) => {
                return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
            })}
          </span>
        </div>
    )       
}

