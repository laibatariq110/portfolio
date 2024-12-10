import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/javascript.png';
import reactIcon from './assets/react.png';
import bootstrapIcon from './assets/bootstrap.png';
import sassIcon from './assets/sass.png';

const Skills = () => {

    return (<section className="skills-section" id='home'>
        <h1 className="my-h1 display-2 text-center" >Front-end React Developer</h1>
        <p className="description-p text-center fs-4 ">
            Hi, I'm Laiba. I am a Front-end React Developer with a passion for creating engaging user interfaces. Skilled in React, JavaScript, and Bootstrap, I focus on building responsive, visually appealing websites that enhance the user experience.
        </p>

        <div className="socials-icons">
            <a href="https://github.com/laibatariq110" target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
                <FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=laibatariq110@gmail.com' target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
                <FontAwesomeIcon icon={faEnvelope} /></a>
        </div>

        <div className='skills-set mt-5 '>
            <h3 className='skills-set-h3'>Skills Set</h3>
            <div className='skills-icons ms-5'>
                <div className='skills-icons-set1'>
                    <img src={htmlIcon} alt="Html Icon" className='skill-icon' />
                    <img src={cssIcon} alt="Css Icon" className='skill-icon' />
                </div>

                <div className='skills-icons-set1'>
                    <img src={jsIcon} alt="JavaScript Icon" className='skill-icon' />
                    <img src={reactIcon} alt="React Icon" className='skill-icon' />
                </div>

                <div className='skills-icons-set1'>
                    <img src={bootstrapIcon} alt="Bootstrap Icon" className='skill-icon' />
                    <img src={sassIcon} alt="Sass Icon" className='skill-icon' />
                </div>
            </div>
        </div>
    </section >);
}
export default Skills;