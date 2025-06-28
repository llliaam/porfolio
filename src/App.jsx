import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Header from './components/Header';

gsap.registerPlugin( ScrollTrigger, SplitText );

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
    </>
  )
}

export default App