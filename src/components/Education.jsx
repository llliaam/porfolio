import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const educationData = [
    {
      institution: "SD Santo Fransiskus Asisi",
      period: "2011-2017",
      level: "Elementary School",
      location: "Binjai"
    },
    {
      institution: "SMP Negeri 3 Binjai",
      period: "2017-2020",
      level: "Junior High School",
      location: "Binjai"
    },
    {
      institution: "SMA Negeri 4 Binjai",
      period: "2020-2023",
      level: "Senior High School",
      location: "Binjai"
    },
    {
      institution: "Universitas Sumatera Utara",
      period: "2023-Present",
      level: "Bachelor's Degree",
      location: "Medan"
    }
  ]

  useGSAP(() => {
    gsap.from('.content-card', {
      scrollTrigger: {
        trigger: '.content-card',
        start: '20px 80%',
        scrub: 1,
      },
      opacity: 0,
      ease: 'back.out',
      y: 150,
      duration: 3,
      delay: 1,
    });
  })

  useGSAP(() => {
    gsap.from('.content-card-mobile', {
      scrollTrigger: {
        trigger: '.content-card-mobile',
        start: '20px 80%',
        scrub: 1,
      },
      opacity: 0,
      ease: 'back.out',
      y: 150,
      duration: 3,
      delay: 1,
    });
  })

  useGSAP(() => {
    gsap.from('.dot', {
      scrollTrigger: {
        trigger : ".dot",
        start: "20px 80%",
        scrub: 1, //bisa pake true tpi ga smooth, 1 ni biar smooth, seconds
      },
      opacity: 0,
      ease: 'back.out',
      y: 80,
      duration: 3,
    });
  }, [])

  useGSAP(() => {
    gsap.from('.dot-mobile', {
      scrollTrigger: {
        trigger : ".dot-mobile",
        start: "20px 80%",
        scrub: 1,
      },
      opacity: 0,
      ease: 'back.out',
      y: 80,
      duration: 3,
    });
  }, [])

  useGSAP(() => {
    gsap.from('.education-title, .education-subtitle', {
      scrollTriger: {
        trigger: 'education-title',
        start: "10px 90%",
        scrub: 2,
      },
      opacity: 0,
      y: '120px',
      ease: "expo.out",
      duration: 4,
    });
  })

  return (
    <div id="education" className='education'>
      <div className='py-4 sm:py-6 md:py-8 lg:py-[10vh] px-4 sm:px-6 md:px-8 lg:px-30'>
        {/* Header Section */}
        <div className='text-center mb-12 lg:mb-24 pt-15'>
          <h2 className='education-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-10'>
            Educational Journey
          </h2>
          <p className='education-subtitle text-lg sm:text-xl max-w-2xl mx-auto opacity-80'>
            My academic path from elementary school to university, shaping my foundation for continuous learning and growth.
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className='hidden lg:block max-w-6xl mx-auto'>
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-neutral-100 dark:bg-white/10'></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Dot */}
                <div className='dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-neutral-100 dark:border-white/10 rounded-full z-10'></div>
                
                {/* Content Card */}
                <div className={`content-card w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm font-medium text-neutral-200 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-lg'>
                        {edu.level}
                      </span>
                      <span className='text-sm opacity-90'>
                        {edu.location}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold mb-2'>
                      {edu.institution}
                    </h3>
                    <p className='font-medium opacity-80'>
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className='lg:hidden max-w-2xl mx-auto'>
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-6 top-0 w-0.5 h-full bg-neutral-100 dark:bg-white/10'></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className='relative flex items-start mb-8 pl-16'>
                {/* Timeline Dot */}
                <div className='dot-mobile absolute left-4 top-6 w-4 h-4 bg-white border-4 border-neutral-100 dark:border-white/10 rounded-full z-10'></div>
                
                {/* Content Card */}
                <div className='flex-1 content-card-mobile'>
                  <div className='bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                      <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mb-2 sm:mb-0 self-start'>
                        {edu.level}
                      </span>
                      <span className='text-sm opacity-70'>
                        {edu.location}
                      </span>
                    </div>
                    <h3 className='text-lg sm:text-xl font-bold mb-2'>
                      {edu.institution}
                    </h3>
                    <p className='font-medium opacity-80'>
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        {/* <div className='mt-16 lg:mt-20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto'>
            <div className='text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
              <div className='text-2xl sm:text-3xl font-bold mb-1'>12+</div>
              <div className='text-sm sm:text-base opacity-70'>Years of Education</div>
            </div>
            <div className='text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
              <div className='text-2xl sm:text-3xl font-bold mb-1'>4</div>
              <div className='text-sm sm:text-base opacity-70'>Institutions</div>
            </div>
            <div className='text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
              <div className='text-2xl sm:text-3xl font-bold mb-1'>2023</div>
              <div className='text-sm sm:text-base opacity-70'>Started University</div>
            </div>
            <div className='text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
              <div className='text-2xl sm:text-3xl font-bold mb-1'>USU</div>
              <div className='text-sm sm:text-base opacity-70'>Current Institution</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Education