
import './Home.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="Information">
      
    <div className='Carrusel'>

 <h1>Joseph Diaz</h1>
 <h2>Front-end Developer</h2>
 <div className='Btns'>
 <button onClick={() => window.location.href = '#About-me'}>
  About Me
 </button>
 <button onClick={() => window.location.href = '#Education'}>
  Skills
 </button>
 <button onClick={() => window.location.href = '#Projects'}>
  Projects
 </button>
 </div>
 </div>
      <div id="About-me" className="About-me">
        <h1>About me</h1>
        <div className='About-me-text'>
        <p>I am responsible, organized  individual who focuses on achieving the set objectives in the most optimal way possible, adaptable to the situation, and constantly seeks improvement.</p>
         <p>I started coding since march 2023 and from that moment to the present i discover an loved the  front-end development world learning both self taugh and with academies </p>
        </div>
       
        <h1 id="Education"> Skills</h1>
        
       <div className='Studies'>
       
        <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png' className='img-icons'/>
        <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png' className='img-icons'/>
       </div>
        
        <h2>Education</h2>
      </div>
     
      <div  className="Education">
       <div className='Card-Certificates'>  <img src="https://media.licdn.com/dms/image/D4E2DAQGWwuTCB2781A/profile-treasury-image-shrink_800_800/0/1705529594218?e=1710205200&v=beta&t=UZS0yCvUhVoJfHutymfgqVvgO0ulEyPtw0Z1O-Jh7m4" alt="Javascript"/></div>

       <div className='Card-Certificates'><img src="https://media.licdn.com/dms/image/D4E2DAQHlQzhjYLpDeA/profile-treasury-image-shrink_800_800/0/1708274576082?e=1710205200&v=beta&t=wULFsTvAOb5tgntQ67pR-vkW56BrL-RbMJ8WFr-3bv8" alt="React JS"/></div>
      </div>
      
      <div id="Projects" className="Projects">
  <h1>Projects</h1>
  <card className="Card">
    <span className="title">Logic</span>
    <div>
    <a href="https://65d3dbc49e9f6b454e5000e7--spiffy-cranachan-c4f1fd.netlify.app"><img src="https://i.stack.imgur.com/S4law.jpg?s=256&g=1"></img></a>
    </div>
  
  </card>
  </div>

     <div className="Footer">
   <a href='https://www.linkedin.com/in/joseph-díaz-2a866729b' className='Link'><FontAwesomeIcon icon={faLinkedin} /></a>
   <a href='https://github.com/JosephD002' className='Link'><FontAwesomeIcon icon={faGithub} /></a>
   
     </div>
        </div>
        
  )
}

export default Home


/** <Navbar expand="lg" className="bg-body-tertiary Nav " >
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


      <ul>
           <li>
          <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png' className='img-icons'></img>
           </li>
           <li>
           <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png' className='img-icons'></img>
           </li>
           <li>
           <img src='https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png' className='img-icons'></img>
            </li>
            <li>
            <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png' className='img-icons'></img>
            </li>
            <li>
            <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png' className='img-icons'></img>
            </li>
            <li>
            <img src='https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png' className='img-icons'></img>
            </li>
            <li>
            <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png' className='img-icons'></img>
            </li>
            <li>
            <img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png' className='img-icons'></img>
            </li>
           <li><p>Next.JS(learning)</p></li>
        </ul>
 */