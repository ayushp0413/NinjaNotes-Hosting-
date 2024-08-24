import { VelocityScroll } from '../components/magicui/VelocityScroll'
import ServiceCard from '../components/core/Home/ServiceCard'
import { services } from '../assets/data/serviceCardData'
import serviceImage from '../assets/images/ourServices.svg'
import Testimonial from '../components/core/Home/Tesimonial'
import Footer from '../components/common/Footer'
import OurTeam from '../components/core/Home/OurTeam'
import HeroSection from '../components/core/Home/HeroSection'
import JoinUs from '../components/core/Home/Join Us/JoinUs'
import JoinUsForm from '../components/core/Home/Join Us/JoinUsForm'
import { useState } from 'react'
import Login from './Login'
import HighlightText from '../components/common/HighlightText'
import { Link } from 'react-router-dom'
import SidebarDemo from '../components/aceternity/sidebar/sidebarComponent'
import HeroHighlightDemo from '../components/aceternity/HeroHighlight/HeroHighlightComponent'


const Home = () => {


  return (
    <div className='relative w-screen rounded-lg bg-white md:shadow-xl flex flex-col gap-y-10'>
      {/* ---------------------- HERO SECTION ----------------------------- */}
      <HeroSection />
      <HeroHighlightDemo />
      

      {/*---------------------- VELOCITY SCROLL ----------------------*/}
      <div className='bg-[#f3f3f3] py-[2rem] -mt-10 shadow-sm z-10'>
        <VelocityScroll
          text='Computer Networks | Machine Learning | TOC | Compiler Design | Operating System | Project Management | DSA |'
          default_velocity={1}
          className='font-display text-center text-5xl font-bold tracking-[-0.06em] drop-shadow-sm text-tempDark opacity-70 md:text-6xl md:leading-[5rem]'
        />
      </div>

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col gap-y-10 border p-[2.3rem] rounded-md bg-[#f2f2f2] mt-8 mb-8 z-10 text-tempDark'>
        
            <span className='heading bg-tempPrimary p-[6px] px-3 rounded-md w-fit mx-auto text-tempDark '>Our Services</span>
          
        <h2 className='heading mx-auto md:text-[3.1rem] text-center text-tempDark'>
          Discover the Power of Knowledge with Us
        </h2>
        <p className='para text-center max-w-[900px] mx-auto  -mt-7 '>
          At our website, we offer a comprehensive range of features to support
          your academic journey. Explore our extensive collection of university
          notes, access last year papers, and stay updated with educational
          blogs. Our platform is designed to provide you with the resources you
          need to succeed.
        </p>

        {/*------------------------ Service Cards ------------------------ */}
        <div data-aos="fade-up" data-aos-duration='1200' className='grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-24'>
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
            data-aos="fade-right" data-aos-duration='1200'
            className='h-[400px] w-[600px] rounded-[30px]'
            src={serviceImage}
            alt=''
          />

          <div data-aos="fade-left" data-aos-duration='1200' className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '>
            
            <h2 className=' heading text-center lg:text-left md:text-5xl text-tempDark'>
              Simplified Notes and Folder Structure for Effective Learning
            </h2>
            <p className='para text-center lg:text-left'>
              High-quality notes, previous year papers, and educational blogs for Engineering and Pharmacy students. Access a wide range of materials to enrich your learning experience. 
            </p>
            <Link to='/notes'>
                <button className='btn hover:bg-tempPrimary bg-tempSecondary border-2 border-tempPrimary transition-all duration-300'>
                  Learn More
                </button>
              </Link>

          </div>
        </div>

        {/*---------------------- TESTIMONIAL SECTION ----------------------*/}
      <div className='bg-[#f3f3f3] pt-10 -mt-4 z-10' >
        <div className=' mx-auto flex items-center justify-center '>
        <span className='heading bg-tempPrimary p-[6px] px-3 rounded-md w-fit mx-auto text-tempDark'>Testimonials</span>
        </div>
        <p className='para text-center w-11/12 mx-auto text-tempDark'>
           Hear from learners who have transformed their study habits and achieved outstanding results with our resources.
        </p>
        <Testimonial />
      </div>

      {/*---------------------- OUR TEAM SECTION ----------------------*/}
      <OurTeam/>

      {/*---------------------- JOIN US SECTION ----------------------*/}
      <JoinUs />


      {/* ------------------ FOOTER ------------------------------------- */}
      <Footer />
          
    </div>
  )
}

export default Home
