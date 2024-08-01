import heroImg from '../assets/images/heroImg.png'
import Navbar from '../components/common/Navbar'
import Particles from '../components/magicui/Particles'
import { VelocityScroll } from '../components/magicui/VelocityScroll'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/core/Home/ServiceCard'
import { services } from '../assets/data/serviceCardData'
import NumberTicker from '../components/magicui/NumberTicker'
import serviceImage from '../assets/images/Service Image.png'
import Testimonial from '../components/core/Home/Tesimonial'
import Footer from '../components/common/Footer'
import OurTeam from '../components/core/Home/OurTeam'
import HeroSection from '../components/core/Home/HeroSection'

// import ParticlesBackground from '../components/Particles/ParticlesBackground'
const Home = () => {
  

  return (
    <div className='relative w-screen rounded-lg bg-white md:shadow-xl flex flex-col gap-y-10'>
      <Navbar />

      {/* ---------------------- HERO SECTION ----------------------------- */}
      <HeroSection />

      {/*---------------------- VELOCITY SCROLL ----------------------*/}
      <div className='bg-[#f3f3f3] py-[2rem] -mt-10 shadow-sm z-10'>
        <VelocityScroll
          text='Computer Networks Machine Learning TOC Compiler Design Operating System Project Management DSA '
          default_velocity={2}
          className='font-display text-center text-6xl font-bold tracking-[-0.06em] drop-shadow-sm  text-dargGreen opacity-70 md:text-7xl md:leading-[5rem]'
        />
      </div>

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col gap-y-10 border-4 p-[2.3rem] rounded-md bg-[#f3f3f3] mt-8 mb-8 z-10'>
        <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
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

        {/*------------------------ Service Cards ------------------------ */}
        <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-24'>
          {services.map(card => (
            <ServiceCard
              key={card.id}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
              btnText={card.btnText}
            />
          ))}
        </div>

        
      </div>

      {/* ---------------------   Service Div ------------------- */}
      <div className='w-11/12 max-w-maxContent text-black flex flex-col-reverse items-center justify-center gap-y-4 mx-auto lg:flex-row lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
          <img
            className='h-[400px] w-[600px] rounded-[30px]'
            src={serviceImage}
            alt=''
          />

          <div className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '>
            
            <h2 className=' text-black font-semibold text-4xl text-center lg:text-left md:text-5xl'>
              Unlock Your Academic Potential with Us
            </h2>
            <p className='text-md text-black font-normal tracking-wide text-center lg:text-left'>
              Welcome to our notes website, where you can access a wide range of
              university notes and last year papers. Explore our collection and
              enhance your learning experience today.
            </p>
            <button className=' bg-dargGreen px-[2rem] text-white rounded-xl py-2 mt-4'>
              Learn More
            </button>

          </div>
        </div>

        {/*---------------------- TESTIMONIAL SECTION ----------------------*/}
      <div className='bg-[#f3f3f3] pt-10 -mt-4 z-10' >
        <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
          <h2 className='text-white pt-3'>Testimonials</h2>
        </div>
        <p className='text-center text-xl font-semibold '>
        Hear from learners who have transformed their study habits and achieved outstanding results with our resources.
        </p>
        <Testimonial />
      </div>

      {/*---------------------- OUR TEAM SECTION ----------------------*/}
      <OurTeam/>

      {/* ------------------ FOOTER ------------------------------------- */}
      <Footer />
          
    </div>
  )
}

export default Home
