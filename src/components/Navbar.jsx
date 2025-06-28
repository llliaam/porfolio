import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    })

    navTween.fromTo('nav', 
      { backgroundColor: 'transparent' }, 
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut'
      })
  })

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className='filter flex items-center justify-between py-10 px-6 md:px-30'>
        <a href="#home" className='nav-font flex items-center gap-2 font-bold text-lg md:text-xl'>
          William Benediktus
        </a>

        <ul className='hidden md:flex items-center gap-10 nav-font'>
          {navLinks.map((link) => (
            <li key={link.id} className='group'>
              <a href={`#${link.id}`}>
                <span className='link link-underline link-underline-black'>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>
          <button className='text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
