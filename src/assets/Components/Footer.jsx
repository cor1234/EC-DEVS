import React from 'react'
 import './styles/Footer.css'
 import Instagram from '../Instagram.svg'
 import Twitter from '../Twitter.svg'
 import LinkedIn from '../LinkedIn.svg'
 import Github from '../Github.svg'
function Footer() {
    return (
        <div id="Footer">
            <div className="footer-main">
                <ul className="footer-row-cont">
                <li>
                        <div className="footer-logo">
                            {/* <a href="#" target="_blank"><img className="icon" src={Logo} alt=""/></a> */}
                        </div>
                        <div className="social-medias">
                            <div className="text">Social Media</div>
                            <div className="icons">
                            
                                 <a href="https://www.instagram.com/codefloworg/" target="_blank"><img src={Instagram} alt=""/></a>
                                <a href="https://twitter.com/codefloworg" target="_blank"><img src={Twitter} alt=""/></a>
                                <a href="https://www.linkedin.com/in/rohan-kumar-465218227/" target="_blank"><img src={LinkedIn} alt=""/></a>
                                <a href="https://github.com/CodeFlowOrg" target="_blank"><img src={Github} alt=""/></a> 
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="links-heading">Company</div>
                        <ul>
                            <div className="footer-links"><a href="#aboutusLink">About Us</a></div>
                            <div className="footer-links"><a href="#">Our Service</a></div>
                            <div className="footer-links"><a href="#">Privacy Policy</a></div>
                            <div className="footer-links"><a href="#">Affiliate Program</a></div>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Get Help</div>
                        <ul>
                            <div className="footer-links"><a href="#faqclick">FAQs</a></div>
                            <div className="footer-links"><a href="#">ECDevs</a></div>
                            <div className="footer-links"><a href="#">Message</a></div>
                            <div className="footer-links"><a href="#">Payment Details</a></div>
                        </ul>
                    </li>
                     <li>
                        <div className="links-heading">Exam</div>
                        <ul>
                            <div className="footer-links"><a href="#">Jee-Main</a></div>
                            <div className="footer-links"><a href="#">Jee-Advanced</a></div>
                            <div className="footer-links"><a href="#">BITSAT</a></div>
                            <div className="footer-links"><a href="#">WBJEE</a></div>
                        </ul>
                    </li> 
                </ul>
            </div>
            <hr />
           
            <div className="footer-end">
            College Pravesh  with ❤️ by ECDevs
                
            </div>
        </div>
    )
}

export default Footer
