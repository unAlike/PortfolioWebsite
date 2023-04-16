import './Nav.css';
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Nav() {
  return (
    <div className='space'>
      <div className="Nav">
        <div className='nav-border'>
          <h2>Logo</h2>
          <div className='nav-items'>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#abou'>About Me</a></li>
              <li><a href='#proj'>Projects</a></li>
              <li><a href='#con'>Contact</a></li>
            </ul>
          </div>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/ryan-ungerleider-ab43721b7/'><BsLinkedin></BsLinkedin></a>
            <a href='https://github.com/unAlike'><BsGithub></BsGithub></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
