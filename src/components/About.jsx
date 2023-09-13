import React from 'react';

export default function About() {
        const message = `I am a full-stack developer with a strong foundation in web-based software development, thanks to my intensive coding bootcamp experience at TechElevator. During my time at TechElevator, I dedicated over 800 hours to learning and applying various programming concepts and technologies.

        - Object-Oriented Programming: Proficient in C# and the .NET framework, I have a deep understanding of object-oriented programming principles. This knowledge allows me to build robust and scalable applications.
        
        - Web Application Development: I specialize in creating dynamic and user-friendly web applications. My skills include HTML, CSS, and JavaScript, and I have experience with modern frontend frameworks like Vue.js. On the backend, I excel in using ASP.NET Web API for building RESTful services.
        
        - Database Programming: With expertise in ADO.NET, database table design, SQL, and MS SQL Server, I can efficiently manage and manipulate data. I'm also skilled in creating and understanding Entity-Relationship (E/R) diagrams, ensuring data integrity and efficiency.
        
        - Development Tools and Techniques: I follow Agile methodologies to streamline development processes. I'm well-versed in unit testing (using MS Test), integration testing, version control with Git, and I'm proficient in using development environments like Visual Studio.
        
        I am passionate about creating innovative and efficient solutions to real-world problems and thrive in collaborative team environments. Feel free to connect with me if you're interested in discussing web development projects or opportunities.`;
    return <>
        <section className="about-container">
                <img className="portrait" src="src\assets\Jimmie-TE.png"></img>
                <p className='about-card'>
            {message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </section>
        </>
}