
import './Home.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="Information">
          <Navbar expand="lg" className="bg-body-tertiary Nav " >
      <Container>
        <Navbar.Brand href="#home" className='text'>Joseph Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About-me" className='text'>About me</Nav.Link>
            <Nav.Link href="#Education" className='text'>Education</Nav.Link>
            <Nav.Link href="#Projects" className='text'>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='Carrusel'>

<h1>Joseph Diaz</h1>
<h2>Front-end Developer</h2>
<div className='Btns'>
<button onClick={() => window.location.href = '#About-me'}>
About Me
</button>
<button onClick={() => window.location.href = '#Education'}>
Education
</button>
<button onClick={() => window.location.href = '#Projects'}>
Projects
</button>
</div>
</div>
      <div id="About-me" className="About-me">
        <h1>About me</h1>
        <p>Im a person who start to love coding since 2022,always trying to know more about this beatiful world and always trying to be the best version i can be!</p>

        <h1> Education</h1>
        <p>I currently have knowledge in HTML | CSS | Javascript | React JS | Git | Node.js and database management in Firebase. </p>
        <h2>Certificates</h2>
      </div>
     
      <div id="Education" className="Education">
       <div className='Card-Certificates'>  <img src="https://media.licdn.com/dms/image/D4E2DAQGWwuTCB2781A/profile-treasury-image-shrink_800_800/0/1705529594218?e=1709244000&v=beta&t=3U-RTWjmijfzy5SPg5X0ekhMWgGX-sPPGUZAddLCI8M" alt="Javascript"/></div>

       <div className='Card-Certificates'><img src="https://media.licdn.com/dms/image/D4E2DAQHlQzhjYLpDeA/profile-treasury-image-shrink_800_800/0/1708274576082?e=1709244000&v=beta&t=r7-HKKfsSSk1IRJQAHfBoZUMtrQKMzdtK_wV4uNwJq4" alt="React JS"/></div>
      </div>
      
      <div id="Projects" className="Projects">
  <h1>Projects</h1>
  <card className="Card">
    <span className="title">Project React</span>
    <div>
    <a href="https://65d3dbc49e9f6b454e5000e7--spiffy-cranachan-c4f1fd.netlify.app"><img src="https://i.stack.imgur.com/S4law.jpg?s=256&g=1"></img></a>
    </div>
  
  </card>
</div>

     <div className="Footer">
   <p>  <FontAwesomeIcon icon={faEnvelope} />:jgdiaz002@gmail.com</p>
     </div>
        </div>
        
  )
}

export default Home


