import './Footer.css';
import React from 'react';

const Footer = () => {
    
    return (
        <div className="footer">

            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-3">
                        <a className="navbar-brand" href="/"><img src="https://www.instructory.net/assets/images/logo-new-white.png" className='img-fluid' width={200} alt="" /></a>
                        <p style={{textAlign:'justify'}} className='text-white mt-4'>Instructory is all about connecting & discovering talents, inspiring people and impact lives with the best teaching and earning opportunities. “Instructory” is an online teaching marketplace, where instructors can create and upload their knowledge & make money online. It is also an E-Learning Platform to learn anything from anywhere from the best & Top rated Professionals and Freelancers! It has created earning opportunities for millions of instructors!</p>
                        <h3 className='text-white mt-4'>Contact Us</h3>
                        <p className='text-white mt-4'>+8801872650687, +8801880087154, +8801880087155</p>
                    </div>
                    <div className="col-md-3">
                        <h6 className='text-white'>Useful Links</h6>
                        <hr style={{color:'white',height:'2px'}} />
                        <li>Blog</li>
                        <li>Our Instructors</li>
                        <li>Our Learners</li>
                        <li>Become an Online Teacher</li>
                        <li>Become an Affiliator</li>
                        <li>How it Works</li>
                        <li>Course Categories</li>
                        <li>Create an Account</li>
                    </div>
                    <div className="col-md-3">
                    <h6 className='text-white'>Need Support</h6>
                        <hr style={{color:'white',height:'2px'}} />
                        <li>Contact Us</li>
                        <li>FAQ</li>

                        <h6 className='text-white mt-5'>Legal</h6>
                        <hr style={{color:'white',height:'2px'}} />
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Purchase and Withdraw</li>
                    </div>
                    <div className="col-md-3">
                    <h6 className='text-white'>About Instructory</h6>
                        <hr style={{color:'white',height:'2px'}} />
                        <li>Our Story</li>
                        <li>Refund Policy</li>
                        <li>Terms and Condition</li>
                        <h6 className='text-white mt-4'>More</h6>
                        <hr style={{color:'white',height:'2px'}} />
                        <li>News and Events</li>
                        <li>Instructor's Level</li>
                    </div>
                </div>
            </div>
            <p style={{marginBottom:'0'}} className='text-center text-white'>
                Developed with &hearts; by <a href="https://www.facebook.com/iamraufu/" className="text-decoration-none ps-1 text-white" target="_blank" rel="noreferrer"> Eftykhar Rahman</a>
            </p>
        </div>
    );
};

export default Footer;