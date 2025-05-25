import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo_new.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            {/* <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" srcset="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nihil dolor nemo voluptate ab maxime!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" srcset="" />
                        <input type="email" name="" id="" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div> */}
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Brijesh Poojary. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Cerfices</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer