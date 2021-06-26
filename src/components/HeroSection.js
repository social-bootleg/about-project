import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted/> */}
            <h1>Social Bootleg</h1> 
            <p>Dokładnie śledź swoje statystyki z instagrama.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>Przejdź do aplikacji</Button>
            </div>

        </div>
    )
}
export default HeroSection;