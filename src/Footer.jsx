import React from 'react'
 import './styles/Footer.css'
 import Instagram from './assets/Instagram.svg'
 import Twitter from './assets/Twitter.svg'
 import LinkedIn from './assets/LinkedIn.svg'
 import Github from './assets/Github.svg'
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
                                <a href="https://in.linkedin.com/company/codefloworg" target="_blank"><img src={LinkedIn} alt=""/></a>
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
            <div className="footer-bg-particles">
                {/* set data-eff to 0 for these particles to stop animating on mouse move */}
                <img className="bg-crl" id="bg-ft-cr" data-eff="5" alt="" />
                <img className="bg-icn" id="bg-ft-i1" data-eff="10" alt=""/>
                <img className="bg-icn" id="bg-ft-i2" data-eff="-15" alt=""/>
            </div>
        </div>
    )
}

export default Footer
