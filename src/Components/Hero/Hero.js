import './Hero.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="container">
            <Navbar />


                <h3 className='text-center hero-h3'>ONLINE TEACHING MARKETPLACE & E-LEARNING PLATFORM</h3>
                <h1 className='text-center hero-h1'>TEACH ANYTHING, LEARN ANYTIME</h1>
                <p className='text-center hero-p'>Upload your course tutorial & become an online teacher. Earn as much as you can, it's FREE! Also, Browse our course categories where you can develop your skills anytime from the best professionals.</p>
                <br />

                <div className="row justify-content-center">
                    <button className='mt-2 btn-st'>Start Teaching</button>
                    <button className='mt-2 btn-sl ms-5'>Start Learning</button>
                </div>

            </div>
        </div>
    );
};

export default Hero;