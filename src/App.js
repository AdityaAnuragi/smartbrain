import './App.css';

import Navigation from './Navigation/Navigation';
import './Navigation/Navigation.css';

import Logo from './Logo/Logo';
import './Logo/Logo.css';

import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import './ImageLinkForm/ImageLinkForm.css';

import Rank from './Rank/Rank';
import './Rank/Rank.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
