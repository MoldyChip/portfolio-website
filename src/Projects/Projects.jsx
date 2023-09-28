import React, { useState } from "react"
import Modal from '../components/Modal.jsx'
import Carousel from '../components/Carousel.jsx'
import { projectVGD, projectTenmo, projectCandyshop } from '../assets/images.jsx'

export default function Projects() {
    const [isVGDOpen, setIsVGDOpen] = useState(false);
    const [isTenmoOpen, setIsTenmoOpen] = useState(false);
    const [isCandyOpen, setIsCandyOpen] = useState(false);

    const closeModals = () => {
        setIsTenmoOpen(false);
        setIsCandyOpen(false);
        setIsVGDOpen(false);
    };

    return (<>
        <ul className="project-container">
            <div className="card">
                <li>
                    <Carousel data={projectVGD} setIsVGDOpen={setIsVGDOpen} vgdClicked={true} />
                    <Modal open={isVGDOpen} onClose={closeModals}>
                        <Carousel data={projectVGD} styleProp={{ height: "auto", width: "100%" }} />
                    </Modal>
                    <a className='bottom-card' href='https://github.com/MoldyChip/videogame-database-website'>
                        <h1 className="project-title">Videogame Database Website</h1>
                        <p className="project-p">RESTful API server with ASP.NET and Vue.js/Bootstrap client. New users can register accounts, view/search the database, create custom lists (currently played/playing/ want to play), post reviews/ratings/comments, view your profile that contains all your reviews/ratings/comments/custom lists. Admins can add/edit games within the database, delete current users/reviews/ratings/comments. Used SSMS for SQL database and Postman to test server-side results.</p>
                    </a>
                </li>
            </div>
            <div className="card">
                <li>
                    <Carousel data={projectTenmo} setIsTenmoOpen={setIsTenmoOpen} tenmoClicked={true} />
                    <Modal open={isTenmoOpen} onClose={closeModals}>
                        <Carousel styleProp={{ height: "auto", width: "100%", outline: "none" }} data={projectTenmo} />
                    </Modal>
                    <a className='bottom-card' href='https://gitfront.io/r/jimknaka/tWmSgxKAa7cd/tenmo-payment/' >
                        <h1 className="project-title">Tenmo Payment App</h1>
                        <p className="project-p">RESTful API server with ASP.NET and command-line application in Visual Studio using C#. New users can register accounts, log-in with JWT authentication, send/request money, approve/reject requests, and view past and pending transfers. Used SSMS for SQL database and Postman to test server-side results.</p>
                    </a>
                </li>
            </div>
            <div className="card" >
                <li>
                    <Carousel data={projectCandyshop} setIsCandyOpen={setIsCandyOpen} candyClicked={true} />
                    <Modal open={isCandyOpen} onClose={closeModals}>
                        <Carousel data={projectCandyshop} styleProp={{ height: "auto", width: "100%" }} />
                    </Modal>
                    <a className='bottom-card' href="https://gitfront.io/r/jimknaka/iqJkEPPFCDsE/candy-shop/" >
                        <h1 className="project-title">CandyShop</h1>
                        <p className="project-p">Is a C# application that simulates a cash register at a candy store. It keeps track of your balance, the shop's inventory and logs a receipt of the transaction.</p>
                    </a>
                </li>
            </div>
        </ul>
    </>)
}


