import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            regName : '',
            regEmail : '',
            regPassword : ''
        }
    }

    onNameChange = (event) => {
        this.setState({regName : event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({regEmail : event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({regPassword : event.target.value})
    }


    onSubmitRegister = () => {
        this.props.changeEmailArg(this.state.regEmail);

        // fetch('http://localhost:3000/image',{
        //     method : 'put',
        //     headers : {'Content-Type' : 'application/json'},
        //     body : JSON.stringify({
        //         email : this.state.regEmail,
        //         home : false
        //     })
        // })
        //     .then(response => response.json())
        //     .then(entries => this.props.changeEntriesArg(entries))



        fetch('http://localhost:3000/register',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.regEmail,
                name : this.state.regName,
                password : this.state.regPassword
            })
        })
            .then(response => response.json())


        fetch('http://localhost:3000/image',{
            method : 'put',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.regEmail,
                home : false
            })
        })
            .then(response => response.json())
            .then(entries => this.props.changeEntriesArg(entries))
            
        this.props.changeHomeArg(true)
    }



    render() {
        let {changeLocArg} = this.props;
        // let {changeHomeArg} = this.props;
        return (
            <div className='signinbox' >
                <h1>Register</h1>
    
                <div className='inputBox' >
                    <label htmlFor='nidR'>First Name</label>
                    <input type='email' id='nidR' 
                        placeholder='eg: john'
                        onChange={this.onNameChange}
                    />
                </div>
    
                <div className='inputBox' >
                    <label htmlFor='eidR'>E-mail Address</label>
                    <input type='email' id='eidR' 
                        placeholder='eg:      john@gmail.com' 
                        onChange={this.onEmailChange}
                    />
                </div>
    
                <div className='inputBox' >
                    <label htmlFor='pswdR'>Password</label>
                    <input type='Password' id='pswdR'
                        onChange={this.onPasswordChange} 
                    />
                </div>
    
                <div className='inputBox unique'>
                    {/* () => changeHomeArg(true) */}
                    <button onClick={this.onSubmitRegister}>
                        Register
                    </button>
                    <p onClick={() => changeLocArg("sign")}>
                        Existing user? Sign in
                    </p>
                </div>
            </div>
        )
    }

}


export default Register;