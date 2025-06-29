import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ width: 'calc(100vw - var(--scrollbar-width, 0px))' }}>
      <div className='filter flex items-center justify-between py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-30'>
        <a href="#home" className='nav-font flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl truncate'>
          <span className='hidden sm:inline'>William Benediktus</span>
          <span className='sm:hidden'>Liam</span>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-10 nav-font'>
          {navLinks.map((link) => (
            <li key={link.id} className='group'>
              <a href={`#${link.id}`} className='text-sm lg:text-base'>
                <span className='link link-underline link-underline-black hover:text-[#FADA7A] transition-colors'>
                  {link.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>
          <button 
            className='text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden fixed top-[60px] sm:top-[72px] left-0 bg-black/90 backdrop-blur-md transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} style={{ right: 'var(--scrollbar-width, 0px)' }}>
        <ul className='flex flex-col py-4'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className='block px-6 py-3 text-white hover:bg-white/10 hover:text-[#FADA7A] transition-all text-sm sm:text-base'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar