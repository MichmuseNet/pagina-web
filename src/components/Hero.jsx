import './Hero.css';
import {Link} from "react-router"

const Hero = () => {
  return (
    
    <div>
      <p className="main-text">
        Architecting <span className='secondary-text'>Digital Artifacts</span>
      </p>
      <p className='description-text '>
        Full-stack developer specializing in building high-performance, visually
        stunning web experiences that live at the intersection of design and
        data.
      </p>
      
      <div className='btn-container'>
        <button className='btn'> 
            <Link to= "/Projects">View Projects</Link>
        </button>
        <button className='btn'> 
            <Link to= "/Aboutme">About Me</Link>
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
