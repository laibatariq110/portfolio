import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="container contact-sec" id='contact'>
            <div className="row">
                {/* Heading */}
                <div className="col-12 ">
                    <h3 className="mb-3">CONTACT</h3>
                    <p>Feel free to reach out!</p>
                </div>
            </div>

            <div className="row mt-4">
                {/* Location */}
                <div className="col-md-6 icons-div">
                    <span className="icon-span">
                        <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
                    </span>
                    <div className='contact-info-div ms-3 mt-2'>
                    <h4 className="mt-2 h4-icon fw-bold">Location</h4>
                    <p className='location-p'>Karachi, Pakistan</p>
                    </div>
                </div>

                {/* Mail */}
                <div className="col-md-6 icons-div">
                    <span className="icon-span">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </span>
                    <div className='contact-info-div ms-3 mt-2'>
                    <h4 className="mt-2 h4-icon fw-bold">Mail</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=laibatariq110@gmail.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">laibatariq110@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
