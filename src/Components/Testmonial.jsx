import './Testmonial.css'
import { useRef } from 'react'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'
import next_icon from '../assets/next-icon.png'
export default function Testmonial({p,h2}){

const sliders=useRef();
let tx=0;

const slideForward=()=>{
if(tx>-50){
tx=-50;
}
sliders.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward=()=>{
if(tx<0){
tx+=50;
}
sliders.current.style.transform=`translateX(${tx}%)`;
}
    return(
    <>
    <div className="testi">
            <p>{p}</p>
            <h2>{h2}</h2>
    </div>
    <div className="Testmonials">
        <img src={next_icon} alt="next-icon" className="next-btn" onClick={slideForward}/>
        <img src={back_icon} alt="back-icon" className="back-btn" onClick={slideBackward}/>
        <div className="slider">
            <ul ref={sliders}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="user-1" />
                            <div>
                                <h3>Maria Queen</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                        Choosing to persuit my degree at Edusity was one of the
                        best decisions i have ever made.The supportive community,
                        state-of-the art facilities,and commitment to academic
                        excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="user-2" />
                            <div>
                                <h3>Jackson Spite</h3>
                                <span>Edusity,UK</span>
                            </div>
                        </div>
                        <p>
                        Choosing to persuit my degree at Edusity was one of the
                        best decisions i have ever made.The supportive community,
                        state-of-the art facilities,and commitment to academic
                        excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="user-3" />
                            <div>
                                <h3>Carlie Angie</h3>
                                <span>Edusity,Jermany</span>
                            </div>
                        </div>
                        <p>
                        Choosing to persuit my degree at Edusity was one of the
                        best decisions i have ever made.The supportive community,
                        state-of-the art facilities,and commitment to academic
                        excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="user-4" />
                            <div>
                                <h3>Jimmy Ranson</h3>
                                <span>Edusity,Swedean</span>
                            </div>
                        </div>
                        <p>
                        Choosing to persuit my degree at Edusity was one of the
                        best decisions i have ever made.The supportive community,
                        state-of-the art facilities,and commitment to academic
                        excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
    )
}