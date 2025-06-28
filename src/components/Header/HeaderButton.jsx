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
    <div className='flex gap-10'>
        <div className='button'>
            <a
            className="group relative inline-block overflow-hidden border border-white rounded-2xl px-8 py-3 focus:ring-3 focus:outline-hidden"
            href="#"
            >
            <span
                class="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full"
            ></span>

            <span
                class="relative text-white transition-colors group-hover:text-black"

            >
                See My Work
            </span>
            </a>
        </div>

        <div className='button'>
            <a
            class="group relative inline-block rounded-2xl overflow-hidden border border-indigo-600 px-8 py-3 focus:ring-3 focus:outline-hidden"
            href="#"
            >
            <span
                class="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full"
            ></span>

            <span
                class="relative text- transition-colors group-hover:text-white"
            >
                Download CV
            </span>
            </a>
        </div>
    </div>
    
  )
}

export default HeaderButton