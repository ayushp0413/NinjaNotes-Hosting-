import heroImg from '../assets/images/heroImg.png'
import Navbar from '../components/common/Navbar'
import Particles from '../components/magicui/Particles'
import { VelocityScroll } from '../components/magicui/VelocityScroll'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/core/Home/ServiceCard'
import { services } from '../assets/data/serviceCardData'

const Home = () => {
  
  const color = '#64AE06' 

  return (
    <div className='relative w-screen rounded-lg bg-white md:shadow-xl flex flex-col gap-y-10'>
      <Navbar />
      
      {/* ---------------------- HERO SECTION ----------------------------- */}
      <div className='bg-theme pb-12 w-full lg:max-h-[740px] lg:h-[740px] lg:pb-0'>
        <Particles
              className='absolute left-0 top-0 w-full h-[1010px] sm:h-[1000px] md:h-[980px] lg:h-[740px] xl:h-[740px]'
              quantity={300}
              ease={30}
              color={color}
              size={2}
        />

        {/*  Main Part of Hero section */}
        <div className='relative mx-auto w-11/12 max-w-maxContent mt-[11.2rem] text-black flex flex-col justify-between gap-y-6 items-center lg:flex-row '>
         
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
            </div>
          </div>

          <div className='mx-auto pt-10 md:pt-0 '>
              <img src={heroImg} width={500} />
          </div>
        </div>
      </div>

      {/*---------------------- VELOCITY SCROLL ----------------------*/}
      <div className='bg-[#f3f3f3] p-[2rem] -mt-10 '>
        <VelocityScroll
          text='Computer Networks Machine Learning TOC Compiler Design Operating System Project Management DSA '
          default_velocity={2}
          className='font-display text-center text-6xl font-bold tracking-[-0.06em] drop-shadow-sm  text-dargGreen opacity-70 md:text-7xl md:leading-[5rem]'
        />
      </div>

      {/*---------------------- SERVICES SECTION ----------------------*/}
      <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col gap-y-10 border-4 p-[2.3rem] rounded-md bg-[#f3f3f3] mb-12'>
        
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
            {
              services.map((card) => (
                <ServiceCard key={card.id} icon={card.icon} heading={card.heading} description={card.description} btnText={card.btnText}  />
              ))
            }
        </div>

      </div>
    </div>
  )
}

export default Home
