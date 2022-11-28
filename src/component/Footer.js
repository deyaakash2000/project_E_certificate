import React from 'react';
import "../css/Footer.css";
import image1 from '../img/norton.svg';
import image2 from '../img/godaddy.svg';
import image3 from '../img/ssl.svg';

import{FaFacebookF}from "react-icons/fa";
import{FaTwitter}from "react-icons/fa";
import{FaInstagram}from "react-icons/fa"
import{FaYoutube}from "react-icons/fa"
function Footer(){
    return(

        <div class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h2>Get in Touch</h2>
                        <div class="contact-info">
                            <p><i class="fa fa-envelope"></i>certifier23@gmail.com</p>
                            <p><i class="fa fa-phone"></i>+6578943201</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h2>Follow Us</h2>
                        <div class="contact-info">
                            <div class="social">
                                <a href="https://www.facebook.com/"><FaFacebookF/></a>
                                <a href="https://twitter.com/i/flow/login"><FaTwitter/></a>
                                <a href="https://www.instagram.com/"><FaInstagram/></a>
                                <a href="https://www.youtube.com/"><FaYoutube/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h2>Company Info</h2>
                        <ul>
                            <li><a href="./About">About Us</a></li>
                            <li><a href="./About">Privacy Policy</a></li>
                            <li><a href="./About">Terms & Condition</a></li>
                        </ul>
                    </div>
                
                </div>
            
                {/* <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h2>Service Info</h2>
                        <ul>
                            <li><a href="./About">Product Registration</a></li>
                            <li><a href="./About">Warrenty Check & Renuew</a></li>
                            <li><a href="./About">Register for Service</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
            
            <div class="row payment align-items-center">
                {/* <div class="col-md-6">
                    <div class="payment-method">
                        <h2>We Accept:</h2>
                        <img src={image4} className="F-img" alt="..."/>
                    </div>
                </div> */}
                <div class="col-md-6">
                    <div class="payment-security">
                        <h2>Secured By:</h2>
                        <img src={image1} className="F-img" alt="..."/>
                        <img src={image2} className="F-img" alt="..."/>
                        <img src={image3} className="F-img" alt="..."/>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;