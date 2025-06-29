import React from 'react'

const Education = () => {
  return (
    <div id="about" className='education'>
        <div className='py-4 sm:py-6 md:py-8 lg:py-[10vh] px-4 sm:px-6 md:px-8 lg:px-30'>
            <div className='flex flex-1 gap-[10rem] sm:px-[2vh] pt-[5vh] lg:max-w-[45%] xl:max-w-[60%]'>
                <div className='education-left flex flex-col gap-[10rem]'>
                    <div>
                        <h1 className='font-bold'>SD Santo Fransiskus Asisi</h1>
                        <p>2011-2017</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>SMA Negeri 4 Binjai</h1>
                        <p>2020-2023</p>
                    </div>
                </div>
                <div className='inline-block h-[50vh] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10'></div>
                <div className='education-right flex pt-[10vh] flex-col gap-[10rem]'>
                    <div>
                        <h1 className='font-bold'>SMP Negeri 3 Binjai</h1>
                        <p>2017-2020</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Universitas Sumatera Utara</h1>
                        <p>2023-Now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education