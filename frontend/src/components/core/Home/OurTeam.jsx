import React from 'react'
import { BorderBeam } from '../../magicui/BorderBeam'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { teamData } from '../../../assets/data/teamData'
import HighlightText from '../../common/HighlightText';

const OurTeam = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto relative flex flex-col h-full items-center justify-center overflow-hidden bg-background mt-6 z-10 text-tempDark'>
      
      <span className='heading bg-tempPrimary p-[6px] px-3 rounded-md w-fit mx-auto text-tempDark'>
        Our Team
      </span>
      <p className='para text-center  '>
        Meet the passionate and dedicated team behind our platform. We are
        committed to providing top-notch study materials and support to help
        students achieve their academic goals.
      </p>

      {/* Team Cards */}
      <div data-aos="fade-up" data-aos-duration='1200' data-aos-once='true' className=' grid grid-cols-1 lg:grid-cols-2 place-content-center gap-x-[1.8rem] gap-y-[1.8rem]  mt-10'>
        {teamData.map(person => (
          <TeamCard
            key={person.id}
            img={person.image}
            name={person.name}
            about={person.about}
            description={person.description}
            link1={person.link1}
            link2={person.link2}
            link3={person.link3}
            link4={person.link4}
          />
        ))}
      </div>
    </div>
  )
}

export default OurTeam

const TeamCard = ({ img, name, about, description, link1, link2, link3, link4 }) => {
  return (
    <>
      <div className='relative flex flex-row w-[330px] h-[250px] md:w-[450px] items-center justify-between overflow-hidden rounded-lg group border bg-tempSecondary gap-x-2 mb-8 p-2 cursor-pointer  transition-all duration-200  '>
        <BorderBeam size={350} duration={9} delay={5} />

        <img
          className='rounded-md opacity-60 group-hover:opacity-100 hover:scale-110 transition-all duration-300 '
          src={img}
          width={150}
          alt=''
        />
        <div className='flex flex-col justify-end p-3 gap-4 text-tempDark'>
          <div className=''>
            <h3 className='text-lg md:text-3xl font-gorastek text-tempDark '>{name}</h3>

            

            <p className='mb-[-5px] mt-[-12px] font-medium text-xs md:text-sm '>{about}</p>

            <p className='text-xs md:text-sm  leading-3 font-groastek'>{description}</p>
          </div>

          <div className='flex flex-row gap-x-4 mt-[-10px]'>
            <Link to={link1}>
              <FaLinkedin className='h-5 w-5 text-tempDark hover:text-tempPrimary'/>
            </Link>
            <Link to={link2}>
              <FaGithub className='h-5 w-5 text-tempDark hover:text-tempPrimary'/>
            </Link>
            <Link to={link3}>
              <FaInstagram className='h-5 w-5 text-tempDark hover:text-tempPrimary'/>
            </Link>
            <Link to={link4}>
              <FaWhatsapp className='h-5 w-5 text-tempDark hover:text-tempPrimary'/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
