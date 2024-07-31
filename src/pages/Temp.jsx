import heroImg from '../assets/images/heroImg.png'
import Navbar from '../components/common/Navbar'

import Particles from '../components/magicui/Particles'
import { VelocityScroll } from '../components/magicui/VelocityScroll'
<<<<<<< HEAD
import NumberTicker from '../components/magicui/NumberTicker'

import serviceIcon1 from '../assets/images/cardIcon1.svg'
import serviceImage from '../assets/images/Service Image.png'
=======
import WordPullUp from '../components/magicui/WordPullUp'
import { motion } from 'framer-motion'
import { LampContainer } from '../components/magicui/Lamp'

import serviceIcon1 from '../assets/images/cardIcon1.svg'
import { Link } from 'react-router-dom'
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0

const Home = () => {
  
  const color = '#64AE06' 

  return (
    <div className='relative w-screen rounded-lg bg-white md:shadow-xl flex flex-col gap-y-10'>
      <Navbar />
      
      {/* ----------- HERO SECTION ----------------------------- */}
      <div className='bg-theme pb-12 w-full lg:max-h-[740px] lg:h-[740px] lg:pb-0'>
        <Particles
              className='absolute left-0 top-0 w-full h-[1010px] sm:h-[1000px] md:h-[980px] lg:h-[740px] xl:h-[740px]'
              quantity={300}
              ease={30}
              color={color}
              size={2}
        />
<<<<<<< HEAD

        <Navbar />

        {/*---------------------- HERO SECTION ----------------------*/}

        <div className=' relative mx-auto w-11/12 mt-44 max-w-maxContent text-black flex flex-col gap-x-40 lg:flex-row items-center pb-16'>
          <div className='lg:w-[50%] flex flex-col'>
            <h2 className=' text-black font-semibold text-5xl md:text-6xl text-center lg:text-left w-full  '>
=======
        {/*  Main Part of Hero section */}
        <div className='relative mx-auto w-11/12 max-w-maxContent mt-[11.2rem] text-black flex flex-col justify-between gap-y-6 items-center lg:flex-row '>
         
          <div className='lg:w-[50%] max-w-maxContent flex flex-col items-center lg:items-start gap-y-5'>
            <h2 className=' text-black font-semibold text-5xl md:text-6xl text-center lg:text-left w-full'>
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0
              Unlock Your Academic Potential with Us
            </h2>
            <p className='text-md text-black font-normal tracking-wide text-center lg:text-left'>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>
<<<<<<< HEAD
            <div className='flex gap-x-5 justify-center md:justify-start my-8'>
              <button className='p-3 bg-[#d9d9d9] rounded-md'>
                Learn More
              </button>
              <button className='p-3 bg-[#0F1B09] text-white rounded-md'>
                Learn More
              </button>
=======
            <div className='flex gap-x-5 justify-center lg:justify-start'>
              <Link to="">
                <button className='p-3 bg-tingGreen text-dargGreen font-semibold rounded-md'>
                  Learn More
                </button>
              </Link>
              <Link to="">
                <button className='p-3 bg-dargGreen text-white font-semibold rounded-md'>
                  Get Notes
                </button>
              </Link>
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0
            </div>

            {/* Number Ticker */}
            <div className='flex gap-14 justify-center items-center md:justify-start'>
              <div>
                <h2>
                  <NumberTicker value={50} />+
                </h2>
                <p className='text-black font-mono mt-[-24px]'>Subjects</p>
              </div>
              <div>
                <h2>
                  <NumberTicker value={100} />+
                </h2>
                <p className='text-black font-mono mt-[-24px]'>Papers</p>
              </div>
            </div>
          </div>

          <div className='mx-auto pt-10 md:pt-0 '>
            <img src={heroImg} width={500} />
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0
      </div>
    

      {/*---------------------- VELOCITY SCROLL ----------------------*/}
<<<<<<< HEAD
      <div className='bg-gray-600 opacity-50 -mt-16'>
        <VelocityScroll
          text='Computer Networks Machine Learning TOC Compiler Design Project Management DSA'
          default_velocity={2}
          className='font-display text-center text-6xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] '
        />
      </div>

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-maxContent mx-auto '>
        <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl my-10'>
=======
      <div className='bg-[#f3f3f3] p-[2rem] -mt-10 '>
        <VelocityScroll
          text='Computer Networks Machine Learning TOC Compiler Design Operating System Project Management DSA '
          default_velocity={2}
          className='font-display text-center text-6xl font-bold tracking-[-0.06em] drop-shadow-sm  text-dargGreen opacity-70 md:text-7xl md:leading-[5rem]'
        />
      </div>
     

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col gap-y-10 border-4 p-[2.3rem] rounded-md bg-[#f3f3f3]'>
        <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0
          <h2 className='text-white pt-3'>Our Services</h2>
        </div>

        <h2 className='text-black font-semibold text-5xl max-w-[980px] mx-auto md:text-[3.1rem] text-center'>
          Discover the Power of Knowledge with Us
        </h2>

        <p className='text-center max-w-[900px] mx-auto text-md text-black font-normal tracking-wide -mt-7'>
          At our website, we offer a comprehensive range of features to support
          your academic journey. Explore our extensive collection of university
          notes, access last year papers, and stay updated with educational
          blogs. Our platform is designed to provide you with the resources you
          need to succeed.
        </p>

<<<<<<< HEAD
        {/*------------------------ Service Cards ------------------------ */}

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-28'>
=======
        {/*------------------------ Cards ------------------------ */}
        
        <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-24'>
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0
          {/* Card 1 */}
          <div className='mx-auto'>
            <div className='relative bg-black w-[300px] h-[400px] rounded-[30px]'>
<<<<<<< HEAD
              <div className='absolute w-[300px] h-[400px] rounded-[30px] bg-tingGreen left-[6px] bottom-[6px] hover:left-0 hover:bottom-0 transition-all duration-200 text-white p-2 flex flex-col items-center'>
                <img src={serviceIcon1} className='h-20 w-20 mt-10' alt='' />
=======
            <div className='absolute w-[300px] h-[400px] rounded-[30px] bg-[#7B9367] left-[6px] bottom-[6px] hover:left-0 hover:bottom-0 transition-all duration-200 text-white p-2 flex flex-col items-center'>
              <img src={serviceIcon1} className='h-20 w-20 mt-10' alt='' />
>>>>>>> 7591721b2fbf780c036277931696e574eb3ba0c0

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

          {/* Card 2 */}
          <div className='mx-auto'>
            <div className='relative bg-black w-[300px] h-[400px] rounded-[30px]'>
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

          {/* Card 3 */}
          <div className='mx-auto'>
            <div className='relative bg-black w-[300px] h-[400px] rounded-[30px]'>
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

        {/* Service Div */}
        <div className='max-w-maxContent text-black flex flex-col-reverse mx-auto lg:flex-row items-center justify-between py-16 gap-8'>
          <img
            className='h-[400px] w-[600px] rounded-[30px]'
            src={serviceImage}
            alt=''
          />

          <div className='lg:w-[40%] flex flex-col gap-y-4'>
            <h2 className=' text-black font-semibold text-4xl md:text-5xl text-center  lg:text-right w-full '>
              Unlock Your Academic Potential with Us
            </h2>

            <p className='text-md text-black font-normal tracking-wide text-center lg:text-right '>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>

            <button className='bg-[#0F1B09] text-white rounded-xl py-2 w-40 md:w-64 mx-auto lg:ml-[248px]'>
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
