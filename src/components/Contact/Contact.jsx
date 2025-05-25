import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b2b31d11-f984-4b9e-9a9e-11b25b041bad");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm open to freelance work, collaborations, or exciting projects. If you need a reliable developer to turn your ideas into reality, let’s connect and build something great together!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" srcset="" /><p>brijeshpoojary@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" srcset="" /><p>9663026674</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>N.H Road , Anandapuram , Sagara - 577412</p>
                        </div>
                    </div>
                </div>
                <form action="" className='contact-right' onSubmit={onSubmit}>
                    <label htmlFor="">Your name</label>
                    <input type="text" name="name" id="" placeholder='Enter your name' />
                    <label htmlFor="">Your email</label>
                    <input type="email" name="email" id="" placeholder='Enter your email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact