import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const HeaderButton = () => {
    useGSAP(() => {
        gsap.from(".button", {
            yPercent: 110,
            ease: 'expo.out',
            duration: 1.8,
            opacity: 0,
        });
    }, [])

    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
            <div className='button'>
                <a
                    className="group relative inline-block overflow-hidden border border-white rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 focus:ring-3 focus:outline-hidden w-full sm:w-auto text-center transition-all hover:scale-105"
                    href="#"
                >
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full"></span>
                    <span className="relative text-white transition-colors group-hover:text-black text-sm sm:text-base font-medium">
                        See My Work
                    </span>
                </a>
            </div>
            <div className='button'>
                <a
                    className="group relative inline-block rounded-xl sm:rounded-2xl overflow-hidden border border-indigo-600 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 focus:ring-3 focus:outline-hidden w-full sm:w-auto text-center transition-all hover:scale-105"
                    href="#"
                >
                    <span className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full"></span>
                    <span className="relative text-white transition-colors group-hover:text-white text-sm sm:text-base font-medium">
                        Download CV
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HeaderButton