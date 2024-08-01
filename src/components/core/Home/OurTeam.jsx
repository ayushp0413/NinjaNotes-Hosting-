import React from 'react'
import { cn } from '../../../lib/utils'
import GridPattern from '../../magicui/GridPattern'
import { BorderBeam } from '../../magicui/BorderBeam'
import img1 from '../../../assets/images/teamImage1.png'
import { Meteors } from '../../magicui/Meteor'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className='relative flex flex-col h-full w items-center justify-center overflow-hidden rounded-lg border-t bg-background p-20 '>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(white,transparent)] opacity-80'
        )}
      />

      <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
        <h2 className='text-white pt-3'>Our Team</h2>
      </div>
      <p className='text-center text-xl font-semibold '>
        Our team is dedicated to delivering exceptional results through
        collaborative effort.
      </p>

      {/* Team Cards */}
      <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mt-10'>

        {/* Card 1 */}
        <div className='relative flex flex-row h-[250px] w-[420px] items-center justify-center overflow-hidden rounded-lg border bg-slate-100 gap-x-2  '>
          <BorderBeam size={250} duration={9} delay={5} />
          <Meteors number={10} />

            <img className='h-[250px] w-[250px] p-[6px] rounded-xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 ' src={img1} alt="" />
            <div className='h-full py-4 pr-[4px]'>
                <h3 className='text-3xl font-serif '>Kunal Bhavare</h3>

                <div className='font-bold mt-[-16px]'>
                    <p className='mb-[-24px]'>Frontend Developer</p>
                    <p className='mb-[-24px]'>UI/UX Designer</p>
                    <p>ML Enthusiast</p>
                </div>

                <p className='text-sm leading-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quaerat fugit similique, at alias est eum a cum cumque quibusdam.</p>

                <div className='flex flex-row gap-x-4'>
                <FaLinkedin className='h-5 w-5 hover:text-tingGreen ' />
                <FaInstagram className='h-5 w-5 hover:text-tingGreen ' />
                <FaWhatsapp className='h-5 w-5 hover:text-tingGreen ' />
                </div>

            </div>
        </div>

         {/* Card 2 */}
         <div className='relative flex flex-row h-[250px] w-[420px] items-center justify-center overflow-hidden rounded-lg border bg-slate-100 gap-x-2  '>
          <BorderBeam size={250} duration={9} delay={5} />
          <Meteors number={10} />

            <img className='h-[250px] w-[250px] p-[6px] rounded-xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 ' src={img1} alt="" />
            <div className='h-full py-4 pr-[4px]'>
                <h3 className='text-3xl font-serif '>Ayush Patidar</h3>

                <div className='font-bold mt-[-16px]'>
                    <p className='mb-[-24px]'>Full Stack Developer</p>
                    <p className='mb-[-24px]'>UI/UX Designer</p>
                    <p>ML Enthusiast</p>
                </div>

                <p className='text-sm leading-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quaerat fugit similique, at alias est eum a cum cumque quibusdam.</p>

                <div className='flex flex-row gap-x-4'>
                <FaLinkedin className='h-5 w-5 hover:text-tingGreen ' />
                <FaInstagram className='h-5 w-5 hover:text-tingGreen ' />
                <FaWhatsapp className='h-5 w-5 hover:text-tingGreen ' />
                </div>

            </div>
        </div>

         {/* Card 3 */}
         <div className='relative flex flex-row h-[250px] w-[420px] items-center justify-center overflow-hidden rounded-lg border bg-slate-100 gap-x-2  '>
          <BorderBeam size={250} duration={9} delay={5} />
          <Meteors number={10} />

            <img className='h-[250px] w-[250px] p-[6px] rounded-xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 ' src={img1} alt="" />
            <div className='h-full py-4 pr-[4px]'>
                <h3 className='text-3xl font-serif '>Kunal Bhavare</h3>

                <div className='font-bold mt-[-16px]'>
                    <p className='mb-[-24px]'>Frontend Developer</p>
                    <p className='mb-[-24px]'>UI/UX Designer</p>
                    <p>ML Enthusiast</p>
                </div>

                <p className='text-sm leading-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quaerat fugit similique, at alias est eum a cum cumque quibusdam.</p>

                <div className='flex flex-row gap-x-4'>
                <FaLinkedin className='h-5 w-5 hover:text-tingGreen ' />
                <FaInstagram className='h-5 w-5 hover:text-tingGreen ' />
                <FaWhatsapp className='h-5 w-5 hover:text-tingGreen ' />
                </div>

            </div>
        </div>


      </div>
    </div>
  )
}

export default OurTeam

{
  /* <div className='' >

<div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
    
  <h2 className='text-white pt-3'>Our Team</h2>
</div>
<p className='text-center text-xl font-semibold '>
Our team is dedicated to delivering exceptional results through collaborative effort.
</p>


<div>

</div>
</div> 
*/
}
