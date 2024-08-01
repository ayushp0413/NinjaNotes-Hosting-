import React from 'react'
import { cn } from '../../../lib/utils'
import GridPattern from '../../magicui/GridPattern'
import { BorderBeam } from '../../magicui/BorderBeam'
import { Meteors } from '../../magicui/Meteor'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { teamData } from '../../../assets/data/teamData'

const OurTeam = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto relative flex flex-col h-full items-center justify-center overflow-hidden bg-background mt-6 mb-6 z-10'>
      {/* NOT LOOKING GOOD */}
      {/* <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(white,transparent)] opacity-80'
        )}
      /> */}

      <div className='w-[340px] h-[80px] bg-dargGreen opacity-90 mx-auto flex items-center justify-center rounded-xl'>
        <h2 className='text-white pt-3'>Our Team</h2>
      </div>
      <p className='text-center text-xl font-semibold '>
        Meet the passionate and dedicated team behind our platform. We are committed to providing top-notch study materials and support to help students achieve their academic goals.
      </p>

      {/* Team Cards */}
      <div className=' grid grid-cols-1 lg:grid-cols-2 place-content-center gap-x-[1.8rem] gap-y-[1.8rem]  mt-10'>
        {
          teamData.map((person) => (
            <TeamCard key={person.id}
              img={person.image}
              name={person.name}
              about={person.about}
              description={person.description}
              link1={person.link1}
              link2={person.link2}
              link3={person.link3}
             />
          ) )
        }
      </div>
    </div>
  )
}

export default OurTeam

const TeamCard = ({img, name, about, description, link1, link2, link3}) => {
  return (
    <>
         <div className='relative flex flex-row w-[500px] h-[300px] items-center justify-between overflow-hidden rounded-lg border bg-[#f3f3f3] gap-x-2 mb-8 p-3 cursor-pointer hover:scale-105 transition-all duration-200  '>
            <BorderBeam size={350} duration={9} delay={5} />
            <Meteors number={10} />

            <img className='rounded-xl opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 ' src={img} width={183} alt="" />
            <div className='flex flex-col justify-end p-3 gap-4'>
                <div className=''>
                    <h3 className='text-3xl font-serif '>{name}</h3>
                    <p className='-mt-2'>{about}</p>
                    <p className='text-sm leading-4'>{description}</p>
                </div>

                <div className='flex flex-row gap-x-4 '>
                  <Link to={link1}>
                    <FaLinkedin className='h-5 w-5 hover:text-tingGreen text-dargGreen ' />
                  </Link>
                  <Link to={link2}>
                    <FaInstagram className='h-5 w-5 hover:text-tingGreen text-dargGreen' />
                  </Link>
                  <Link to={link3}>
                    <FaWhatsapp className='h-5 w-5 hover:text-tingGreen text-dargGreen' />
                  </Link>
                </div>

            </div>
        </div>
    </>
  )
}


