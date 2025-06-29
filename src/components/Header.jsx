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
            stagger: 0.3,
            duration: 1,
        });

        gsap.from(".profile", {
            yPercent: 30,
            opacity: 0,
            ease: 'expo.out',
            duration: 2,
        });
    }, [])
    
    return (
         <section id="home" className='min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-[10vh] pb-8 sm:pb-12 lg:pb-16'>
            <div className='w-full px-4 sm:px-6 md:px-8 lg:px-30'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-12 lg:gap-20'>
                    {/* Text Content */}
                    <div className='flex flex-col w-full lg:max-w-[45%] xl:max-w-[40%] order-2 lg:order-1'>
                        <h1 className='greet text-lg sm:text-xl md:text-2xl mb-2'>Hi, I'm</h1>
                        <h1 className='title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6'>
                            <span className="text-gradient">William Bendiktus</span>
                        </h1>
                        <p className='description text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 opacity-90'>
                            I am a third year Information Technology student at Universitas Sumatera Utara 
                            with a strong focus on backend development. I am passionate about building efficient 
                            and scalable systems, and continuously improving my skills in web technologies and programming.
                        </p>
                        <div>
                            <HeaderButton/>
                        </div>
                    </div>
                    <div className='profile relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[35%] xl:max-w-[30%] mx-auto lg:mx-0 group overflow-hidden order-1 lg:order-2'>
                        <div className='relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-auto lg:aspect-square'>
                            <img 
                                src="/images/gantengBet.png" 
                                alt="ProfilePic" 
                                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl grayscale hover:grayscale-0 transition-all duration-500" 
                            />
                            <div className='absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-white/10 backdrop-blur-md text-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl'>
                                <p className='text-center text-sm sm:text-base'>This is Me!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header