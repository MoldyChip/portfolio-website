import Jimmie from '../assets/Jimmie.png'

export default function Home() {
    return <div className="page-container">
        <div className="portrait-container">
        <img className="portrait" src={Jimmie} />
        <div className="personal-container">
        <div className="home-card">
        <h2 className="personal-title">Full Stack Developer</h2>
        <h1 className="personal-name">Jimmie Nakadaira</h1>
        </div>
        <h1 className='portrait-card'>
          I am passionate about creating innovative and efficient solutions to real-world problems and thrive in collaborative team environments. Feel free to connect with me if you're interested in discussing web development projects or opportunities.
          </h1>
          <div className='contact-card'>
            <h2>
              Contact Me
            </h2>
            <div className='email-container'>
            <p className='email'> 
              Email:
            </p>
            <p className='info'>
              contact@jimmienakadaira.com
            </p>
            </div>
            <div className='phone-container'>
            <p className='phone'>
              Phone Number:
            </p>
            <p className='info'>
               760-455-1450
            </p>
            </div>
          </div>
          </div>
        </div>
        </div>
}