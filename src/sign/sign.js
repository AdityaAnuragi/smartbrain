import React from 'react';

const Sign = (props) => {
    let {changeLocArg} = props;
    let {changeHomeArg} = props;
    return (
        <div className='signinbox' >
            <h1>Sign In</h1>

            <div className='inputBox' >
                <label htmlFor='eidSI'>E-mail Address</label>
                <input type='email' id='eidSI' placeholder='eg    john@gmail.com' />
            </div>

            <div className='inputBox' >
                <label htmlFor='pswdSI'>Password</label>
                <input type='Password' id='pswdSI' />
            </div>

            <div className='inputBox unique'>
                <button onClick={() => changeHomeArg(true)} >Sign In</button>
                <p onClick={() => changeLocArg("register")}>New user? Register</p>
            </div>
        </div>
    )
}


export default Sign;