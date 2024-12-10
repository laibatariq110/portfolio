import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';

const Projects = () => {

    return(
    <section className="projects-sec container" id='projects'>
        <h2 className="text-center mb-5">Projects</h2>
        {/* Project 1 : Car Rental Web */}
        <div className="project d-flex flex-column align-items-center">
            <img src={Project1} alt="Car Rental Web Screenshot"  className="project-img" />
            <div className="project-info row text-start">
                {/* Left Column: Heading and Description */}
                <div className='col-md-8'>
                <h3 className='mt-2'>Car Rental Web</h3>
                <p className='mb-3'>A web application for renting luxury cars, featuring a dynamic
                interface built with React and Bootstrap.</p>
                </div>
              {/* Right Column: Buttons */}
              <div className='col-md-4 d-flex align-items-center justify-content-end'>
                <a 
                href="https://laibatariq110.github.io/Car-Rental-Web/"
                target="_blank"
                rel="noopener noreferrer"
              className="btn me-2">
                Try
                </a>
                <a 
                href="https://github.com/laibatariq110/Car-Rental-Web"
                target="_blank"
                rel="noopener noreferrer"
                className="btn me-2">
                    Code
              </a>
              </div>
            </div>
        </div>

        {/* Project 2 : Amazon Clone */}
        <div className="project d-flex flex-column align-items-center mt-5">
            <img src={Project2 } alt="Amazon Clone Screenshot"  className="project-img" />
            <div className="project-info row text-start">
                {/* Left Column: Heading and Description */}
                <div className='col-md-8'>
                <h3 className='mt-2'>Amazon Clone</h3>
                <p className='mb-3'>This project is an Amazon Clone designed to replicate the core design and features of Amazon's website. It includes an interactive hero section, product sliders, a responsive navbar, and a multi-level footer. Built using HTML, CSS, and JavaScript, this clone prioritizes responsiveness, interactivity, and user-friendly design.</p>
                </div>
              {/* Right Column: Buttons */}
              <div className='col-md-4 d-flex align-items-center justify-content-end'>
                <a 
                href="https://laibatariq110.github.io/Amazon-Clone/"
                target="_blank"
                rel="noopener noreferrer"
              className="btn me-2">
                Try
                </a>
                <a 
                href="https://github.com/laibatariq110/Amazon-Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn me-2">
                    Code
              </a>
              </div>
            </div>
        </div>

        {/* Project 3 : Weather App */}
        <div className="project d-flex flex-column align-items-center mt-5">
            <img src={Project3 } alt="Weather App Screenshot"  className="project-img" />
            <div className="project-info row text-start">
                {/* Left Column: Heading and Description */}
                <div className='col-md-8'>
                <h3 className='mt-2'>Weather App</h3>
                <p className='mb-3'>This is a simple weather application that uses an API and allows users to enter a city, country or continent name and view the current weather data including temperature, humidity, weather description, and an emoji representing the weather condition. Built using HTML, CSS and JavaScript.</p>
                </div>
              {/* Right Column: Buttons */}
              <div className='col-md-4 d-flex align-items-center justify-content-end'>
                <a 
                href="https://laibatariq110.github.io/Weather-App/"
                target="_blank"
                rel="noopener noreferrer"
              className="btn me-2">
                Try
                </a>
                <a 
                href="https://github.com/laibatariq110/Weather-App"
                target="_blank"
                rel="noopener noreferrer"
                className="btn me-2">
                    Code
              </a>
              </div>
            </div>
        </div>

        {/* Project 4 : Dictionary app */}
        <div className="project d-flex flex-column align-items-center mt-5">
            <img src={Project4 } alt="Dictionary App Screenshot"  className="project-img" />
            <div className="project-info row text-start">
                {/* Left Column: Heading and Description */}
                <div className='col-md-8'>
                <h3 className='mt-2'>Dictionary App</h3>
                <p className='mb-3'>A simple online dictionary app that allows users to search for English words and fetches their meanings, parts of speech, and pronunciation from an API. The app is built using HTML, CSS, and JavaScript.

</p>
                </div>
              {/* Right Column: Buttons */}
              <div className='col-md-4 d-flex align-items-center justify-content-end'>
                <a 
                href="https://laibatariq110.github.io/dictionary-app/"
                target="_blank"
                rel="noopener noreferrer"
              className="btn me-2">
                Try
                </a>
                <a 
                href="https://github.com/laibatariq110/dictionary-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn me-2">
                    Code
              </a>
              </div>
            </div>
        </div>
    </section>
        );
}
export default Projects;