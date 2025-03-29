import './App.scss'
// Imported Components
import Weather from './components/Weather';
import BackgroundImg from './assets/images/test.png';

function App() {
  return (
    <>
    <img src={BackgroundImg} id='backgroundImg' />
     <Weather />
    </>
  )
}

export default App
