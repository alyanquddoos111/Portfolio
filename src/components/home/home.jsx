import './home.css';
import ProfilePic from '../props/ProfilePic.jpeg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={ProfilePic} alt='' />
      </div>

      <h2>
        <span>About Me</span> <br />
        <p>
        Meticulous web developer with over 2 years of front end experience and passion for responsive website design. PSEB certified. Seeking new opportunities in order to polish my skills.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
