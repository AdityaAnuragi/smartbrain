import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='LogoDivClass'>
            <Tilt className="TiltFlex" options={{ max : 30 }}>
                <div className="Tilt-inner"> <img src={brain} alt=''/> </div>
            </Tilt>
        </div>
    )
}


export default Logo;