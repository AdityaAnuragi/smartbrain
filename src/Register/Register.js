import React from 'react';

const Register = (props) => {
    let {changeLocArg} = props;
    let {changeHomeArg} = props;
    return (
        <div className='signinbox' >
            <h1>Register</h1>

            <div className='inputBox' >
                <label htmlFor='nidR'>First Name</label>
                <input type='email' id='nidR' placeholder='eg: john' />
            </div>

            <div className='inputBox' >
                <label htmlFor='eidR'>E-mail Address</label>
                <input type='email' id='eidR' placeholder='eg:      john@gmail.com' />
            </div>

            <div className='inputBox' >
                <label htmlFor='pswdR'>Password</label>
                <input type='Password' id='pswdR' />
            </div>

            <div className='inputBox unique'>
                <button onClick={() => changeHomeArg(true)}>Register</button>
                <p onClick={() => changeLocArg("sign")}>Existing user? Sign in</p>
            </div>
        </div>
    )
}


export default Register;