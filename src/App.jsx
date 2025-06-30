import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Certificate from './components/Certificate';


gsap.registerPlugin( ScrollTrigger, SplitText );

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Education/>
        <Certificate/>

    </>
  )
}

export default App