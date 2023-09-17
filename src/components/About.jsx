import React from 'react';

export default function About() {
        const message = `I am a full-stack developer with a strong foundation in web-based software development, thanks to my intensive coding bootcamp experience at TechElevator. During my time at TechElevator, I dedicated over 800 hours to learning and applying various programming concepts and technologies.
        I am passionate about creating innovative and efficient solutions to real-world problems and thrive in collaborative team environments. Feel free to connect with me if you're interested in discussing web development projects or opportunities.`;
    return <>
        <section className="about-container">
                <img className="about-portrait" src="src\assets\Jimmie-TE.png"></img>
                <h1 className='about-card'>
                I am a full-stack developer with a strong foundation in web-based software development, thanks to my intensive coding bootcamp experience at TechElevator. During my time at TechElevator, I dedicated over 800 hours to learning and applying various programming concepts and technologies.
          </h1>
          <div className='about-smallerCard'>
            <img className='software-icon' src='src\assets\c-sharp.png' />
          <h2 className='about-title'>
              Object Orientated Programming
          </h2>
          <p>
          I have a deep understanding of object-oriented programming principles. This knowledge allows me to build robust and scalable applications.
          </p>
          </div>
          <div className='about-smallerCard'>
            <div className='icon-container'>
            <img src='src\assets\javascript.png' className='software-icon' />
            <img src='src\assets\vue.png' className='software-icon' />
            <img src='src\assets\bootstrap.png' className='software-icon' />
            </div>
          <h2 className='about-title'>
              Web Application Development
          </h2>
          <p>
          I have experience with modern frontend frameworks like Vue.js. On the backend, I excel in using ASP.NET Web API for building RESTful services.
          </p>
          </div>
          <div className='about-smallerCard'>
            <img src='src\assets\ssms.png' className='software-icon' />
          <h2 className='about-title'>
              Database Programming
          </h2>
          <p>
          With expertise in ADO.NET, database table design, SQL, and MS SQL Server, I can efficiently manage and manipulate data.
          </p>
          </div>
          <div className='about-smallerCard'>
          <div className='icon-container'>
            <img src='src\assets\agile.png' className='software-icon' />
            <img src='src\assets\git.png' className='software-icon' />
            <img src='src\assets\vs-code.png' className='software-icon' />
            <img src='src\assets\vs.png' className='software-icon' />
            </div>
          <h2 className='about-title'>
              Development Tools and Techniques
          </h2>
          <p>
          I follow Agile methodologies to streamline development processes. I'm well-versed in version control with Git, and I'm proficient in using development environments like Visual Studio.
          </p>
          </div>
        </section>
        </>
}