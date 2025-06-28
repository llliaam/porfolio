import React from 'react'
import HeaderButton from './Header/HeaderButton'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(SplitText)

const Header = () => {
    useGSAP(() => {
        const textSplit = new SplitText(".title", {
            type:"chars, words",
        });
        const paragraphSplit = new SplitText(".description, .greet", {
            type:'lines',
        });

        textSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(textSplit.chars, {
            yPercent: 90,
            opacity : 0,
            stagger: 0.03,
            ease: 'back.out',
            duration: 1.8,
            delay: 1,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            ease: 'back.out',
            duration: 1.8,
        });

        gsap.from(".profile", {
            yPercent: 30,
            opacity: 0,
            ease: 'expo.out',
            duration: 1.8,
        });
    }, [])
  return (
   <section className='pt-[20vh]'>
        <div className='flex flex-center items-center justify-between px-30 gap-20'>
            <div className='flex flex-col max-w-[40vw]'>
                <h1 className='greet'>Hi, I'm</h1>
                <h1 className='title'>William Bendiktus</h1>
                <p className='description'>
                    I am a second year Information Technology student at Universitas Sumatera Utara 
                    with a strong focus on backend development. I am passionate about building efficient 
                    and scalable systems, and continuously improving my skills in web technologies and programming.
                </p>
                <div className='pt-[1.5rem]'>
                    <HeaderButton/>
                </div>
            </div>
            <div className='profile relative max-w-[30vw] group overflow-hidden'>
                <img 
                    src="/images/gantengBet.png" 
                    alt="ProfilePic" 
                    className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-500" 
                />
                <div className='absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md text-white p-4 rounded-3xl'>
                    <p className='text-center'>This is Me!</p>
                </div>
           </div>
        </div>
    </section>

  )
}

export default Header