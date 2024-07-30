import heroImg from '../assets/images/heroImg.png'
import Navbar from '../components/common/Navbar'
import Particles from '../components/magicui/Particles'
import { VelocityScroll } from '../components/magicui/VelocityScroll'

const Home = () => {
  const color = '#000' // '#000' pe black ho jayega vo bhi ek baar check kar lena
  return (
    <div className='relative w-screen rounded-lg border bg-theme md:shadow-xl flex flex-col gap-y-16'>
      <Particles
        className='absolute inset-0'
        quantity={300}
        ease={30}
        color={color}
        size={1}
      />

      <Navbar />

      {/* HERO SECTION */}

      <div className=' relative mx-auto w-11/12 mt-44 max-w-maxContent text-black flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-[50%] flex flex-col gap-y-5'>
          <h2 className=' text-black font-semibold text-5xl md:text-6xl text-center lg:text-left w-full  '>
            {' '}
            Unlock Your Academic Potential with Us
          </h2>

          <p className='text-md text-black font-normal tracking-wide text-center lg:text-left '>
            Welcome to our notes website, where you can access a wide range of
            university notes and last year papers. Explore our collection and
            enhance your learning experience today.
          </p>
          <div className='flex gap-x-5 justify-center md:justify-start'>
            <button className='p-3 bg-[#d9d9d9] rounded-md'>Learn More</button>
            <button className='p-3 bg-[#0F1B09] text-white rounded-md'>
              Learn More
            </button>
          </div>
        </div>

        <div className='mx-auto pt-10 md:pt-0 '>
          <img src={heroImg} width={500} />
        </div>

        
      </div>
      <div className='bg-gray-600 opacity-30'>
          <VelocityScroll
            text='Computer Networks Machine Learning TOC Compiler Design Project Management DSA'
            default_velocity={2}
            className='font-display text-center text-6xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]'
          />
        </div>
    </div>
  )
}

export default Home
