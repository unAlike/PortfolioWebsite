import './Projects.css';
import { FaPython, FaJava } from 'react-icons/fa'
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb'
import { SiGodotengine, SiMinecraft, SiUnrealengine, SiUnity } from 'react-icons/si'


function Projects() {
  return (
    <div className="Projects">
    <div className='content-panel'>
      <div className='content-box'>
        <h1 className='projects-header'>My Projects</h1>
        <hr></hr>
        <div className='projects-box'>
          <div className='project' id='prop'>
            <p className='top'>Electromagnetic Wave Propagation</p>
            <div className='bottom'>
              <SiUnity title='Unity' className='logo'/>
              <span>   </span>
              <TbBrandCSharp title='C#' className='logo'/>
            </div>
          </div>
          <div className='project' id='bugby'>
            <p className='top'>Bugby</p>
            <div className='bottom'>
              <SiUnrealengine title='Unreal' className='logo'/>
              <span>   </span>
              <TbBrandCpp title='C++' className='logo'/>
            </div>
          </div>
          <div className='project' id='tdzs'>
            <p className='top'>Top Down Zombie Shooter</p>
            <div className='bottom'>
              <SiGodotengine title='Godot' className='logo'/>
            </div>
          </div>
          <div className='project' id='cvc'>
            <p className='top'>Minecraft CSGO</p>
            <div className='bottom'>
              <FaJava title='Java' className='logo'/>
              <span>   </span>
              <SiMinecraft title='Minecraft' className='logo' size={25} id='mc'/>
            </div>
          </div>
          <div className='project' id='dm'>
            <p className='top'>Dream Mender</p>
            <div className='bottom'>
              <SiGodotengine title='Godot' className='logo'/>
            </div>
          </div>
          <div className='project' id='pool'>
            <p className='top'>PyGame Pool</p>
            <div className='bottom'>
              <FaPython title='Python Pygame' className='logo'/>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default Projects;
