import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const HeaderButton = () => {
    useGSAP(() => {
        gsap.from(".button", {
            yPercent: 110,
            ease: 'expo.out',
            duration: 1.5,
            opacity: 0,
            delay: 1.7,
        });
    }, [])

    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
            <div className='button'>
                <a
                    className="group relative inline-block overflow-hidden border border-[#ECDFCC] rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 w-full sm:w-auto text-center transition-all hover:scale-105"
                    href="#"
                >
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-[#ECDFCC] transition-all group-hover:w-full"></span>
                    <span className="relative text-[#ECDFCC] transition-colors group-hover:text-black text-sm sm:text-base font-medium">
                        See My Work
                    </span>
                </a>
            </div>
            <div className='button'>
                <a
                    className="group relative inline-block rounded-xl sm:rounded-2xl overflow-hidden border border-[#FFF4B7] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 w-full sm:w-auto text-center transition-all hover:scale-105"
                    href="#"
                >
                    <span className="absolute inset-y-0 right-0 w-[2px] bg-[#FFF4B7] transition-all group-hover:w-full"></span>
                    <span className="relative text-[#FFF4B7] transition-colors group-hover:text-[#1E201E] text-sm sm:text-base font-medium">
                        Download CV
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HeaderButton