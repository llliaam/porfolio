import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';


gsap.registerPlugin( ScrollTrigger, SplitText );

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Education/>
    </>
  )
}

export default App