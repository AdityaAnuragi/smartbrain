import React from 'react';

const Navigation = (props) => {
    let {changeHomeArg} = props;
    return (
        <nav className='NavigationClass'>
            <p className='SignOutClass' onClick={() => changeHomeArg(false)} >Sign Out</p>
        </nav>
    )
}


export default Navigation;