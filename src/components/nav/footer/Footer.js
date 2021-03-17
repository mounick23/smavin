import React from 'react';
import './Footer.css';
import {
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
  } from "@ant-design/icons";

const footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Study Mavin</h3>
                            <p className="mb-2">1st Street, Vedayapalem, Gayathri Nagar  <br />
                                 Nellore, India<br /> </p>
                            <p className="mb-2">Phone:<br /> <a style={{ color: 'white'}} href="tel:+917330834720">+91 733 083 4720</a></p>
                            <p>Email:<br /> <a>Studymavin@gmail.com</a><br /></p>

                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"><TwitterOutlined /></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"><FacebookOutlined /></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"><InstagramOutlined /></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"><LinkedinOutlined /></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Countries</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">USA</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Canada</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Australia</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">UK</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">New Zealand</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">European</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">All Countries</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                        
                            <h4>Our Newsletter</h4>
                            <p>Subscribe to our newsletter</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright 2021 <strong><span>Study Mavin pvt</span></strong>. All Rights Reserved
                </div>
               
            </div>
        </footer>
    )
}

export default footer;

// <div className="credits">
//Designed by <a href="https://bootstrapmade.com/">Mounick Reddy</a>
//</div>