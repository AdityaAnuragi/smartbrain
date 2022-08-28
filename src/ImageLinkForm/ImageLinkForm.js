import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='paraClass'>Hello I can detect faces :D</p>
            <div className='searchContainer' >
                <input type="text" className='inputClass'/> 
                <button className='detectClass'>Detect</button>
            </div>
        </div>
    )
}


export default ImageLinkForm;