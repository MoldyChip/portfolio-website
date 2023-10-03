import React from 'react';
import { jimmie, cSharp, javascript, vue, bootstrap, ssms, agile, git, vsCode, vs } from '../assets/images.jsx'


export default function About() {
  return <>
    <section className='about-container'>
      <div className='about-topcontainer'>
        <img className="about-portrait" src={jimmie}></img>
        <h1 className='about-card'>
          I am a full-stack developer with a strong foundation in web-based software development, thanks to my intensive coding bootcamp experience at TechElevator. During my time at TechElevator, I dedicated over 800 hours to learning and applying various programming concepts and technologies.
        </h1>
      </div>
      <div className='about-middlecontainer' >
        <div className='about-smallerCard'>
          <img className='software-icon' src={cSharp} />
          <h2 className='about-title'>
            Object Orientated Programming
          </h2>
          <p className='about-p'>
            I have a deep understanding of object-oriented programming principles. This knowledge allows me to build robust and scalable applications.
          </p>
        </div>
        <div className='about-smallerCard'>
          <div className='icon-container'>
            <img src={javascript} className='software-icon' />
            <img src={vue} className='software-icon' />
            <img src={bootstrap} className='software-icon' />
          </div>
          <h2 className='about-title'>
            Web Application Development
          </h2>
          <p className='about-p'>
            I have experience with modern frontend frameworks like Vue.js. On the backend, I excel in using ASP.NET Web API for building RESTful services.
          </p>
        </div>
        <div className='about-smallerCard'>
          <img src={ssms} className='software-icon' />
          <h2 className='about-title'>
            Database Programming
          </h2>
          <p className='about-p'>
            With expertise in ADO.NET, database table design, SQL, and MS SQL Server, I can efficiently manage and manipulate data.
          </p>
        </div>
        <div className='about-smallerCard'>
          <div className='icon-container'>
            <img src={agile} className='software-icon' />
            <img src={git} className='software-icon' />
            <img src={vsCode} className='software-icon' />
            <img src={vs} className='software-icon' />
          </div>
          <h2 className='about-title'>
            Development Tools and Techniques
          </h2>
          <p className='about-p'>
            I follow Agile methodologies to streamline development processes. I'm well-versed in version control with Git, and I'm proficient in using development environments like Visual Studio.
          </p>
        </div>
      </div>
    </section>
  </>
}