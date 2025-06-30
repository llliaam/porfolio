import React from 'react'
import Button from './CertificateSection/Button'


const Certificate = () => {
  return (
    <div className='education py-[50px] lg:py-[10px] px-[5px] lg:px-[20rem] flex flex-col gap-[50px]'>
        <div className='certificate-title text-center py-10 font-lexend-exa'>
            <h1 className='font-bold text-3xl lg:pb-20'>My Certificate</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-4 px-[10px]">
            <div className='certificate-1 w-full h-70 lg:h-50 bg-white text-black rounded-xl'>
                <img src="/images/certificate/certificate1.png" alt="certificate1" className='h-full w-full rounded-xl'/>
            </div>
            <div className='certificate-2 w-full h-70 lg:h-40 bg-white text-black rounded-xl'>
                 <img src="/images/certificate/certificate2.png" alt="certificate2" className='h-full w-full rounded-xl' />
            </div>
            <div className='certificate-3 w-full h-70 lg:h-40 bg-white text-black rounded-xl'>
                 <img src="/images/certificate/certificate3.png" alt="certificate2" className='h-full w-full rounded-xl' />
            </div>
            <div className='certificate-4 w-full h-70 lg:h-40 bg-white text-black rounded-xl'>
                 <img src="/images/certificate/certificate4.png" alt="certificate2" className='h-full w-full rounded-xl'/>
            </div>
        </div>
      <Button/>
    </div>
  )
}

export default Certificate