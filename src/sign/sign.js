import React, { Component } from 'react';

class Sign extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail : event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword : event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === "Successful login") {
                    this.props.changeHomeArg(true);
                }
            })
        
    }

    render() {
        let {changeLocArg} = this.props;
        // let {changeHomeArg} = this.props;
        return (
            <div className='signinbox' >
                <h1>Sign In</h1>
    
                <div className='inputBox' >
                    <label htmlFor='eidSI'>E-mail Address</label>
                    <input 
                        onChange={this.onEmailChange}
                         type='email' 
                         id='eidSI' 
                         placeholder='eg    john@gmail.com' 
                    />
                </div>
    
                <div className='inputBox' >
                    <label htmlFor='pswdSI'>Password</label>
                    <input 
                        onChange={this.onPasswordChange} 
                        type='Password' 
                        id='pswdSI' 
                    />
                </div>
    
                <div className='inputBox unique'>
                    <button onClick={this.onSubmitSignIn} >Sign In</button>
                    <p onClick={() => changeLocArg("register")}>New user? Register</p>
                </div>
            </div>
        );
    }
}


export default Sign;