import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return(
    <footer className="footer text-center py-3 mt-5">
        <div className='container footer-container'>
       <p> <strong>&copy; 2024 Laiba.dev. All rights reserved.</strong></p>
        <div className="socials-footer">

        <a href="https://github.com/laibatariq110" target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
        <FontAwesomeIcon icon={faGithub} /></a>

        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=laibatariq110@gmail.com' target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
                <FontAwesomeIcon icon={faEnvelope}/></a>
        </div>
        </div>
    </footer>);
}
export default Footer;