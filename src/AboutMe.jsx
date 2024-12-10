import laptopPic from './assets/laptop.png';

const AboutMe = () => {

    return(<section className="container about-me-sec" id='about'>
        <div className="row align-items-center">

                <div className="col-md-6 custom-col-1 text-center">
                    <img src={laptopPic} alt="Aesthetic laptop image" width="100%" />
                </div>
                
                <div className="col-md-6 custom-col-2" >
                    <h3 className='mb-3'>ABOUT ME</h3>
                    <span>Front-End React Developer</span><br/>
                    <span >based in Karachi, Pakistan.</span>
                    <p className='mt-4' >Hi, my name is Laiba, and I’m a passionate Front-end Developer with a keen eye for design and user experience. I enjoy bringing creative ideas to life through clean, efficient, and responsive code.</p> 
                    <p className='mt-3'>My current expertise includes HTML, CSS, JavaScript, and React, seamlessly combined with Sass and Bootstrap to craft visually appealing and functional websites.</p>
                </div>
            </div>
    </section>);
}
export default AboutMe;