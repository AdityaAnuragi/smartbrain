import React from 'react';

const ImageLinkForm = (props) => {
    let {onInputChange} = props;
    let {onSubmit} = props;
    return (
        <div>
            <p className='paraClass'>I can detect faces :D</p>
            <div className='searchContainer' >
                <input type="search" className='inputClass' onChange={onInputChange} /> 
                <button className='detectClass' onClick ={onSubmit} >Detect</button>
            </div>
        </div>
    )
}


export default ImageLinkForm;