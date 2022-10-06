import { Component } from 'react';
import './App.css';

import Navigation from './Navigation/Navigation';
import './Navigation/Navigation.css';

import Logo from './Logo/Logo';
import './Logo/Logo.css';

import Rank from './Rank/Rank';
import './Rank/Rank.css';

import Sign from './sign/sign';
import './sign/sign.css';

import Register from './Register/Register';

import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import './ImageLinkForm/ImageLinkForm.css';

import FaceRecognition from './FaceRecognition/FaceRecognition';
import './FaceRecognition/FaceRecognition.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      anObj: {},
      imageAspect: {},
      boxDisplay: false,
      home: false, // true means at home screen false means signIn or Register
      loc: "sign", // loc is either "sign" or "register"
      loggedInUser : { // contains email and entries of the current user
        userEmail : "",
        userEntries : 0
      }
    }
  }

  currentEmail = (mail) => {
    this.setState(Object.assign(this.state.loggedInUser,{userEmail : mail}))
  }

  currentEntries = (value) => {
    this.setState(Object.assign(this.state.loggedInUser,{userEntries : value}))
  }


  boxInfo = (stuff) => {
    let objwithboundinginfo = {
      top_row: stuff.top_row,
      right_col: stuff.right_col,
      bottom_row: stuff.bottom_row,
      left_col: stuff.left_col
    }
    this.setState({ anObj: objwithboundinginfo })
    let image = document.querySelector("#inputimage")
    this.setState({ imageAspect: { imageWidth: image.width, imageHeight: image.height } })
    this.setState({ boxDisplay: true })
  }

  onButtonSubmitFunc = (event) => {
    const USER_ID = 'aditya_anuragi';
    const PAT = 'ba7498e0fccf4c56ab2b55cdd863d5da';
    const APP_ID = 'my-first-application';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => this.boxInfo(result.outputs[0].data.regions[0].region_info.bounding_box))
      // .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
      .catch(error => console.log('error', error));

      fetch('http://localhost:3000/image',{
        method : 'put',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
          email : this.state.loggedInUser.userEmail,
          home : true
        })
      })
        .then(response => response.json())
        .then(entries => this.currentEntries(entries))

  }

  onInputChangeFunc = (event) => {
    let link_holder = event.target.value
    this.setState({ boxDisplay: false })
    this.setState({ input: link_holder })
  }

  changeLocFunc = (answer) => {
    this.setState({ loc: answer })
  }

  changeHomeFunc = (stuff) => {
    this.setState({input : ""})
    this.setState({ home: stuff })
  }

  render() {
    return (
      <>
        {
          this.state.home === true
            ? <div className="App">
              <Navigation changeHomeArg={this.changeHomeFunc} />
              <Logo />
              <Rank 
                info = {this.state.loggedInUser}
              />
              <ImageLinkForm
                onInputChange={this.onInputChangeFunc}
                onSubmit={this.onButtonSubmitFunc}
              />
              <FaceRecognition
                imageLinkFromApp={this.state.input}
                dataCoordinatesFromApp={this.state.anObj}
                imageAspectFromApp={this.state.imageAspect}
                boxDisplayFromApp={this.state.boxDisplay} />
            </div>
            : (
              this.state.loc === "sign"
                ? <Sign 
                    changeLocArg={this.changeLocFunc} 
                    changeHomeArg={this.changeHomeFunc} 
                    changeEmailArg={this.currentEmail} 
                    changeEntriesArg={this.currentEntries}
                  />
                : <Register 
                    changeLocArg={this.changeLocFunc} 
                    changeHomeArg={this.changeHomeFunc} 
                    changeEmailArg={this.currentEmail} 
                    changeEntriesArg={this.currentEntries}
                  />
            )
        }
      </>
    );
  }
}

export default App;