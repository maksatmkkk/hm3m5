import './css/App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

function App() {

  return (
    <>
    <Header />
    <div className='App-main'>
      <LeftContainer/>
      <RightContainer/>
    </div>
    <hr className='main-hr'/>
    <Footer />
    </>
  )
}

export default App;