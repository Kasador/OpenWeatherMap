import './App.scss'
// Components
import Weather from './components/Weather';
import Navigation from './components/Navigation';
// Assets 
import BackgroundImg from './assets/images/test.png';

function App() {
  return (
    <>
    <img src={BackgroundImg} id='backgroundImg' />
      <Navigation />
      <Weather />
    </>
  )
}

export default App
