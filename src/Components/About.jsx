import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'
export default function About({playing}){

    return(<>
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about" className='about-img'/>
                <img src={play_icon} alt="play_icon" className='play_icon-img' onClick={()=>{playing(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                
                    <p>Embark on a transformative educational journey with our university's comprehensive
                    educational programms.Our cutting-edge curriculum is designed empower students with
                    the knowledge,skills and experiences needded to excel in the in the dynamic field of
                    education.</p>
                    <p>With a focus on innovation,hands-on learning,and personalized mentorship,our programms
                    prepare aspiring educators to make a meaningful impact in classrooms,schools and 
                    communities.</p>
                    <p> wheather you aspire to become a administratitor,teacher,councilor or a educational Leader.
                    Our diverse range of programms offerrs the pathway to achieve your goals and unlock your
                    full potentials in shaping the futer education.
                </p>
            </div>
        </div>
    </>)
}