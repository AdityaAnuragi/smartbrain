import React from 'react';

const ImageLinkForm = (props) => {
    let {onInputChange} = props;
    let {onSubmit} = props;
    return (
        <div>
            <p className='paraClass'>https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Altair-Ibn-LaAhad.Assassins-Creed-Series.webp</p>
            <div className='searchContainer' >
                <input type="search" className='inputClass' onChange={onInputChange} /> 
                <button className='detectClass' onClick ={onSubmit} >Detect</button>
            </div>
        </div>
    )
}


export default ImageLinkForm;