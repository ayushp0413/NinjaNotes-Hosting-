import heroImg from '../assets/images/heroImg.png'
import Navbar from '../components/common/Navbar'
import Particles from '../components/magicui/Particles'
import { VelocityScroll } from '../components/magicui/VelocityScroll'
import WordPullUp from '../components/magicui/WordPullUp'

import { motion } from 'framer-motion'
import { LampContainer } from '../components/magicui/Lamp'

import serviceIcon1 from '../assets/images/cardIcon1.svg'

const Home = () => {
  const color = '#000' // '#000' pe black ho jayega vo bhi ek baar check kar lena
  return (
    <div className='relative w-screen rounded-lg border bg-white md:shadow-xl flex flex-col gap-y-16'>
      <div className='bg-theme '>
        {/*---------------------- PARTICLES BACKGROUND ----------------------*/}

        <Particles
          className='absolute inset-0'
          quantity={300}
          ease={30}
          color={color}
          size={1}
        />

        <Navbar />

        {/*---------------------- HERO SECTION ----------------------*/}

        <div className=' relative mx-auto w-11/12 mt-44 max-w-maxContent text-black flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-[50%] flex flex-col gap-y-5'>
            <h2 className=' text-black font-semibold text-5xl md:text-6xl text-center lg:text-left w-full  '>
              Unlock Your Academic Potential with Us
            </h2>

            <p className='text-md text-black font-normal tracking-wide text-center lg:text-left '>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>
            <div className='flex gap-x-5 justify-center md:justify-start'>
              <button className='p-3 bg-[#d9d9d9] rounded-md'>
                Learn More
              </button>
              <button className='p-3 bg-[#0F1B09] text-white rounded-md'>
                Learn More
              </button>
            </div>
          </div>

          <div className='mx-auto pt-10 md:pt-0 '>
            <img src={heroImg} width={500} />
          </div>
        </div>

        {/*---------------------- VELOCITY SCROLL ----------------------*/}
        <div className='bg-gray-600 opacity-50 mt-10'>
          <VelocityScroll
            text='Computer Networks Machine Learning TOC Compiler Design Project Management DSA'
            default_velocity={2}
            className='font-display text-center text-6xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] '
          />
        </div>
      </div>

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-max mx-auto '>
        <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl my-10'>
          <h2 className='text-white pt-3'>Our Services</h2>
        </div>

        <h2 className='text-black font-semibold text-5xl max-w-[980px] mx-auto md:text-6xl text-center  '>
          Discover the Power of Knowledge with Us
        </h2>

        <p className='text-center max-w-[900px] mx-auto text-md text-black font-normal tracking-wide'>
          At our website, we offer a comprehensive range of features to support
          your academic journey. Explore our extensive collection of university
          notes, access last year papers, and stay updated with educational
          blogs. Our platform is designed to provide you with the resources you
          need to succeed.
        </p>

        {/* Cards */}
        <div className='grid '>
          {/* Card 1 */}
          <div>
            <div className='bg-black w-[300px] h-[400px] rounded-[30px] relative'></div>
            <div className='absolute w-[300px] h-[400px] rounded-[30px] bg-tingGreen left-[6px] bottom-[6px] hover:left-0 hover:bottom-0 transition-all duration-200 text-white p-2 flex flex-col items-center'>
              <img src={serviceIcon1} className='h-20 w-20 mt-10' alt='' />

              <h3 className='font-groastek text-[32px] mt-4'>
                University Notes
              </h3>

              <p className='font-groastek font-light text-center mb-10 '>
                Access a wide variety of university notes covering various
                subjects and topics.
              </p>

              <button className='bg-black py-4 px-20 rounded-full text-xl '>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
