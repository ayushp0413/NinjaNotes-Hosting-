import React from 'react'
import { Link } from 'react-router-dom'
import NumberTicker from '../../magicui/NumberTicker'
import Particles from '../../magicui/Particles'
import heroImg from "../../../assets/images/heroImg.png"
import ParticlesBackground from  "../../Particles/ParticlesBackground"

const HeroSection = () => {

    const color = '#64AE06';

  return (
    <div className=''>   
        <div className='bg-theme mt-[-7rem] pb-12 w-full  lg:max-h-[740px] lg:h-[740px] lg:pb-0'>
        <Particles
          className='absolute left-0 top-0 w-full h-[1010px] sm:h-[1000px] md:h-[980px] lg:h-[740px] xl:h-[740px]'
          quantity={300}
          ease={70}
          color={color}
          size={2}
        />
        {/* <ParticlesBackground  /> */}

        {/*  Main Part of Hero section */}
        <div className='relative mx-auto w-11/12 max-w-maxContent mt-[11.2rem] pt-[7.7rem]  text-black flex flex-col justify-between gap-y-6 items-center lg:flex-row '>
          <div className='lg:w-[50%] max-w-maxContent flex flex-col items-center lg:items-start gap-y-5'>
            <h2 className=' text-black font-semibold text-5xl md:text-6xl text-center lg:text-left w-full'>
              Unlock Your Academic Potential with Us
            </h2>
            <p className='text-md text-black font-normal tracking-wide text-center lg:text-left'>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>
            <div className='flex gap-x-5 justify-center lg:justify-start'>
              <Link to=''>
                <button className='p-3 bg-tingGreen text-dargGreen font-semibold rounded-md'>
                  Learn More
                </button>
              </Link>
              <Link to=''>
                <button className='p-3 bg-dargGreen text-white font-semibold rounded-md'>
                  Get Notes
                </button>
              </Link>
            </div>

            {/* Number Ticker */}
            <div className='flex gap-14 justify-center items-center md:justify-start'>
              <div>
                <h2 className='font-bold text-offWhite'>
                  <NumberTicker value={50}/>+
                </h2>
                <p className=' text-dargGreen font-semibold mt-[-24px]'>Subjects</p>
              </div>
              <div>
                <h2 className='font-bold text-offWhite'>
                  <NumberTicker value={100} />+
                </h2>
                <p className=' text-dargGreen font-semibold pl-[6px] mt-[-24px]'>Papers</p>
              </div>
            </div>
          </div>

          <div className='pt-10 md:pt-0 '>
            <img src={heroImg} width={500} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
