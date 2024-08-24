"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./heroHighlight";
import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup"
import heroImg from "../../../assets/images/1.png"
import HighlightText from "../../common/HighlightText";


export default function HeroHighlightDemo() {
  return (
    <HeroHighlight >
        <motion.h1
        initial={{
            opacity: 0,
            y: 20,
        }}
        animate={{
            opacity: 1,
            y: [20, -5, 0],
        }}
        transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
        }}
        className="w-full max-w-maxContent text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700   dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
        >
        <div>
        <div className='relative mx-auto w-full mt-12  text-tempDark flex flex-col justify-between gap-y-6 items-center lg:flex-row '>
            <div className='lg:w-[50%] max-w-maxContent flex flex-col items-center lg:items-start gap-y-5'>
            <h2  className='text-tempDark font-semibold text-5xl md:text-6xl text-center lg:text-left w-full'>
                Unlock Your <HighlightText text=" Potential Academics" />  with Us
            </h2>
            <p  className='para text-center lg:text-left text-tempDark'>
                Welcome to our notes website, where you can access a wide range of
                university notes and last year papers. Explore our collection and
                enhance your learning experience today.
            </p>
            <div className='flex gap-x-5 justify-center lg:justify-start'>
                <Link to=''>
                <button className='btn hover:bg-tempPrimary bg-tempSecondary border-2 border-tempPrimary transition-all duration-300'>
                    Learn More
                </button>
                </Link>
                <Link to=''>
                <button className='btn border-2 border-black hover:bg-black hover:text-white transition-all duration-300'>
                    Get Notes
                </button>
                </Link>
            </div>

            {/* Number Ticker */}
            <div className='flex gap-14 justify-center items-center md:justify-start'>
                <div className="flex flex-col justify-center items-center text-[1.5rem]">
                <h2 className='font-bold text-tempDark'>
                    <CountUp start={-10} end={30} duration={2.75} suffix=" +"></CountUp>
                </h2>
                <p className=' text-dargGreen font-semibold mt-[-24px]'>Subjects</p>
                </div>
                
                <div className="flex flex-col items-start text-[1.5rem]">
                <h2 className='font-bold text-tempDark'>
                    <CountUp start={-10} end={50} duration={3.75} suffix=" +"></CountUp>
                </h2>
                <p className='text-dargGreen font-semibold mt-[-24px]'>Notes</p>
                </div>
            </div>

            </div>

            <div className='pt-10 md:pt-0  '>
            <img src={heroImg} width={500} />
            </div>
            
        </div>
        </div>
        
        </motion.h1>
      
    </HeroHighlight>
  );
}
