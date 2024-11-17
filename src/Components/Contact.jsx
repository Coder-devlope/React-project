import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'
import { useState } from 'react'
export default function Contact({p,h2}){

    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "181d0a3d-c69d-43d2-ac23-7e1bfd97739d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return(
        <>
            <div className="contacts">
            <p>{p}</p>
            <h2>{h2}</h2>
            </div>

            <div className="contact">
                <div className="contact-col">
                    <h3>Send Us a Messege <img src={msg_icon} alt="" /></h3>
                    <p>
                        Feel free to reach out through contact form or find our contact
                        information below.Your feedbacks,questions and suggestions are
                        impotant to us as we strive to provide exceptional service to
                        our university communities.
                    </p>
                    <ul>
                        <li><img src={mail_icon} alt="" /> Contact@swain.dev </li>
                        <li><img src={phone_icon} alt="" /> +1 423-562-9542 </li>
                        <li> <img src={location_icon} alt="" /> 53 Massachusetts Ave,Cambridge <br />
                        MA 03943,United States</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>
                            Your Name:
                        </label>
                        <input type="text" name='name' placeholder='Enter Your Name' required/>
                        <label>
                            Phone Number:
                        </label>
                        <input type="tel" name='phone' placeholder='Enter Your Number' required/>
                        <textarea name="mssage" rows="6" placeholder='Enter Your Message' required></textarea>
                        <button className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </>
    )
}